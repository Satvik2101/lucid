const TagTestGenerator = require("./test-generators/TagTestGenerator");

class TagCodeGenerator {

    constructor(tagName, attributes) {
        this.tagName = tagName;
        this.attributes = attributes; //all attributes, global and local
        this.parentTagClass = "Tag";
    }

    getTestGenerator() {
        if (this.testGenerator == null) {
            this.testGenerator = new TagTestGenerator(this.tagName, this.getClassName(), this.attributes);
        }
        return this.testGenerator;
    }

    generateTestCode() {
        return this.getTestGenerator().generateTest();
    }
    generateClassCode() {
        const className = this.getClassName();
        return `${this.getImportStatements()}\n\n
//${this.getMdnUrl()}
class ${className} extends ${this.parentTagClass} {
    ${this.generateTagConstructor()}
    ${this.generateFactoryConstructor()}
}

${this.getExportStatement()}`
    }

    getClassName() {

        //capitalize first letter
        var className = this.tagName[0].toUpperCase() + this.tagName.slice(1);
        //replace - with _
        className = this.replaceDashWithUnderscore(className);

        //ugly hack to avoid reserved words
        if (className == "Object") {
            className = "ObjectTag";
        }
        return className;
    }

    getImportStatements() {
        return this.getParentTagImportStatement("Tag") + "\n" + this.getChildrenTypeImportStatement();
    }

    getParentTagImportStatement() {
        return `import ${this.parentTagClass} from "../utils/${this.parentTagClass}";`;
    }

    getChildrenTypeImportStatement() {
        return `import childrenType from "../childrenType";`;

    }

    getMdnUrl() {
        return `https://developer.mozilla.org/en-US/docs/Web/HTML/Element/${this.tagName}`

    }

    generateTagConstructor() {
        return `constructor(children?: childrenType) {
        super("${this.tagName}", children);
    }`
    }

    generateFactoryConstructor() {
        const className = this.getClassName(this.tagName);

        const attributesParameterType = this.generateAttributesParameterType(this.attributes);
        var start = `static withAttributes(attri: ${attributesParameterType}, children?: childrenType): ${className} {
            var tag = new ${className}(children);
            tag.attrs(attri);
            return tag;
        }`

        return start;
    }

    generateAttributesParameterType() {
        var attributesParameterType = "{\n";
        for (var i = 0; i < this.attributes.length; i++) {
            var attri = this.attributes[i];
            attributesParameterType += `\t\t"${attri}"?: string,\n`;
        }
        attributesParameterType += "\t\t[key: string]: any\n\t}";
        return attributesParameterType;
    }


    getExportStatement() {
        return `export default ${this.getClassName()};`;
    }

    replaceDashWithUnderscore(str) {
        return str.replace(/-/g, "_");
    }


}

module.exports = TagCodeGenerator;