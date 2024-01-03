const fs = require('fs');
var raw = fs.readFileSync("html-elements-attributes.json");

//raw is key-value pairs of each element and its attributes
//iterate over key-value pairs

var obj = JSON.parse(raw);
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
    return className;
}


function genSetterForAttri(attri) {
    const functionName = attri.replace(/-/g, "_");
    const template = `
    ${functionName}(value: string) {
        this.setAttr("${attri}", value);
    }
`;

    return template;

}

function genVoidElement(element, attributes) {
    const className = getClassName(element);
    var start = `
import { VoidTag } from "../utils/Tag";


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

    start += `}
    
export default ${className};`;

    return start;
}
function genUnattributedElement(element) {
    const className = getClassName(element);
    const template = `
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}
class ${className} extends UnattributedTag {
    constructor(children?: childrenType) {
        super("${element}", children);
    }
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
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${element}
class ${className} extends Tag {
    constructor(children?: childrenType) {
        super("${element}", children);
    }
    ${setter}
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