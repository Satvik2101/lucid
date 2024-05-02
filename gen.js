const fs = require('fs');
var rawJsonContents = fs.readFileSync("html-tags-attributes.json");

var htmlTagsAndAttributes = JSON.parse(rawJsonContents);

var globalAttributes = htmlTagsAndAttributes["*"];

var htmlTags = Object.keys(htmlTagsAndAttributes); //also contains "*". Not an actual HTML tag, it is a wildcard for global attributes

//hard-coded void tags. These tags do not have closing tags. Should probably not be hard-coded, but it's unlikely to change anytime soon.
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

function isVoidTag(tag) {
    return voidTags.includes(tag);
}

function getParentTagImportStatement(parentTagClass) {
    return `import ${parentTagClass} from "../utils/${parentTagClass}";`;
}
function getChildrenTypeImportStatement() {
    return `import childrenType from "../childrenType";\n`;

}
function getExportStatement(className) {
    return `export default ${className};`;
}
function getMdnUrl(tag) {
    return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${tag}`

}
function replaceDashWithUnderscore(str) {
    return str.replace(/-/g, "_");
}
function getClassName(htmlTag) {

    //capitalize first letter
    var className = htmlTag[0].toUpperCase() + htmlTag.slice(1);
    //replace - with _
    className = replaceDashWithUnderscore(className);

    //ugly hack to avoid reserved words
    if (className == "Object") {
        className = "ObjectTag";
    }
    return className;
}

function getChildrenParameterForTag(tag, comma = false) {
    if (isVoidTag(tag)) return "";
    return `${comma ? ", " : ""}children?: childrenType`;

}


function generateTagConstructor(tag) {
    const isVoid = isVoidTag(tag);

    return `constructor(${getChildrenParameterForTag(tag)}) {
        super("${tag}"${isVoid ? "" : ", children"});
    }`
}

function generateAttributesParameterType(attributes) {
    var attributesParameterType = "{\n";
    for (var i = 0; i < attributes.length; i++) {
        var attri = attributes[i];
        attributesParameterType += `\t\t"${attri}"?: string,\n`;
    }
    attributesParameterType += "\t\t[key: string]: any\n\t}";
    return attributesParameterType;
}
function generateFactoryConstructor(tag, localAttributes, isVoid = false) {
    const className = getClassName(tag);
    var attributes = [...localAttributes, ...globalAttributes]

    const attributesParameterType = generateAttributesParameterType(attributes);
    var start = `static withAttributes(attri: ${attributesParameterType}${getChildrenParameterForTag(tag, true)}): ${className} {
        var tag = new ${className}${isVoid ? "" : "(children)"};
        tag.attrs(attri);
        return tag;
    }`
    //TODO: just found a bug above, shoudl be isVoid? "()": "(children)".
    //Will fix it after this refactoring, because I want it to be a separate commit.

    return start;
}

function generateSetterForAttribute(attribute) {
    const functionName = replaceDashWithUnderscore(attribute);
    const attributeSetterFunctionString = `
    ${functionName}(value?: string) {
        if (value) this.setAttr("${attribute}", value);
        return this;
    }`;
    return attributeSetterFunctionString;

}

function generateVoidTag(tag, attributes) {
    const className = getClassName(tag);
    var start =
        `${getParentTagImportStatement("VoidTag")}

//${getMdnUrl(tag)}
class ${className} extends VoidTag {
    ${generateTagConstructor(tag)}

`

    for (var i = 0; i < attributes.length; i++) {
        var attri = attributes[i];
        start += generateSetterForAttribute(attri);
    }

    start += `

    ${generateFactoryConstructor(tag, attributes, true)}    
}
    
${getExportStatement(className)}`;

    return start;
}
function generateUnattributedTag(tag) {
    const className = getClassName(tag);
    const template =
        `${getParentTagImportStatement("UnattributedTag")}
${getChildrenTypeImportStatement()}

//${getMdnUrl(tag)}
class ${className} extends UnattributedTag {
    ${generateTagConstructor(tag)}

    ${generateFactoryConstructor(tag, [])}

}

${getExportStatement(className)}`;

    return template;
}

function generateAttributedTag(tag, attributes) {
    const className = getClassName(tag);
    var attributeSetters = "";
    for (var i = 0; i < attributes.length; i++) {
        var attri = attributes[i];
        attributeSetters += generateSetterForAttribute(attri);
    }
    const template =
        `${getParentTagImportStatement("Tag")}
${getChildrenTypeImportStatement()}

//${getMdnUrl(tag)}
class ${className} extends Tag {
    ${generateTagConstructor(tag)}
    ${attributeSetters}
    ${generateFactoryConstructor(tag, attributes)}
}

${getExportStatement(className)}`;

    return template;
}


let classNames = [];
for (var i = 0; i < htmlTags.length; i++) {
    var tag = htmlTags[i];
    var attributes = htmlTagsAndAttributes[tag];
    var codeForTagClass;
    if (tag == "*") continue;
    if (voidTags.includes(tag)) {
        codeForTagClass = generateVoidTag(tag, attributes);
    }
    else if (attributes.length == 0) {
        codeForTagClass = generateUnattributedTag(tag);
    }
    else {
        codeForTagClass = generateAttributedTag(tag, attributes);
    }
    //create the file if it doesnt exist

    const className = getClassName(tag);
    classNames.push(className);
    fs.writeFileSync(`./tags/${className}.ts`, codeForTagClass);
}

function generateIndexFile() {

    //get all files in the /utils directory
    const utils = fs.readdirSync("./utils");
    let indexFileContents = "//utils \n\n";

    for (var i = 0; i < utils.length; i++) {
        var util = utils[i].replace(".ts", "");
        indexFileContents += `export { default as ${util} } from "./utils/${util}";\n`;

    }

    indexFileContents += "\n\n//tags\n\n";

    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];
        indexFileContents += `export { default as ${className} } from "./tags/${className}";\n`;
    }

    fs.writeFileSync("./index.ts", indexFileContents);

}

generateIndexFile();