const fs = require('fs');
var raw = fs.readFileSync("html-elements-attributes.json");

var obj = JSON.parse(raw);

var globalAttributes = obj["*"];
//raw is key-value pairs of each element and its attributes
//iterate over key-value pairs

var keys = Object.keys(obj);

var voidTags = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
]

function getClassName(element) {
    //capitalize first letter
    var className = element[0].toUpperCase() + element.slice(1);
    //replace - with _
    className = className.replace(/-/g, "_");
    console.log(className)

    if (className == "Object") {
        className = "ObjectTag";
        console.log(className)
    }
    return className;
}

function genFactoryConstructor(element, attributes, isVoid = false) {
    const className = getClassName(element);
    // console.log("attributes ", attributes)
    // console.log("globalAttributes ", globalAttributes)
    var newAttri = [...attributes, ...globalAttributes]
    // console.log(newAttri, newAttri.length)
    var attributesParameterType = "{\n";
    for (var i = 0; i < newAttri.length; i++) {
        var attri = newAttri[i];
        attributesParameterType += `\t\t"${attri}"?: string,\n`;
    }
    attributesParameterType += "\t\t[key: string]: any\n\t}";
    var start = `
    static withAttributes(attri: ${attributesParameterType}${isVoid ? "" : ", children?: childrenType"}): ${className} {
        var tag = new ${className}${isVoid ? "" : "(children)"};
        tag.attrs(attri);
        return tag;
    }

    `

    return start;
}

function genSetterForAttri(attri) {
    const functionName = attri.replace(/-/g, "_");
    const template = `
    ${functionName}(value?: string) {
        if(value) this.setAttr("${attri}", value);
        return this;
    }
`;

    return template;

}

function genVoidElement(element, attributes) {
    const className = getClassName(element);
    var start = `
import VoidTag from "../utils/VoidTag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}
class ${className} extends VoidTag {
    constructor() {
        super("${element}");
    }

    `

    for (var i = 0; i < attributes.length; i++) {
        var attri = attributes[i];
        start += genSetterForAttri(attri);
    }

    start += `

${genFactoryConstructor(element, attributes, true)}    
}
    
export default ${className};`;

    return start;
}
function genUnattributedElement(element) {
    const className = getClassName(element);
    const template = `
import UnattributedTag from "../utils/UnattributedTag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}
class ${className} extends UnattributedTag {
    constructor(children?: childrenType) {
        super("${element}", children);
    }

${genFactoryConstructor(element, [])}

}

export default ${className};
    `;

    return template;
}

function genAttributedElement(element, attributes) {
    const className = getClassName(element);
    var setter = "";
    for (var i = 0; i < attributes.length; i++) {
        var attri = attributes[i];
        setter += genSetterForAttri(attri);
    }
    const template = `
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}
class ${className} extends Tag {
    constructor(children?: childrenType) {
        super("${element}", children);
    }
    ${setter}
${genFactoryConstructor(element, attributes)}


}



export default ${className};
    `;

    return template;
}


for (var i = 0; i < keys.length; i++) {
    var element = keys[i];
    var attributes = obj[element];
    var template;
    if (element == "*") continue;
    if (voidTags.includes(element)) {
        template = genVoidElement(element, attributes);
    }
    else if (attributes.length == 0) {
        // console.log(element);
        template = genUnattributedElement(element);
    }
    else {

        template = genAttributedElement(element, attributes);
    }
    //create the file if it doesnt exist

    fs.writeFileSync(`./tags/${getClassName(element)}.ts`, template);
}