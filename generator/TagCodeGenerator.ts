import TagRegistry from "./TagRegistry";
import TagTestGenerator from "./test-generators/TagTestGenerator";

class TagCodeGenerator {

    tagName: string;
    attributes: string[];
    className: string;
    parentTagClass: string;
    testGenerator?: TagTestGenerator;
    constructor(tagName: string, attributes: string[]) {
        this.tagName = tagName;
        this.attributes = attributes; //all attributes, global and local
        this.parentTagClass = "Tag";
        this.className = TagRegistry.getClassName(tagName);
    }

    getTestGenerator() {
        if (this.testGenerator == null) {
            this.testGenerator = new TagTestGenerator(this.tagName, this.className, this.attributes);
        }
        return this.testGenerator;
    }

    generateTestCode() {
        return this.getTestGenerator().generateTest();
    }
    generateClassCode() {
        const className = this.className;
        return `${this.getImportStatements()}\n\n
//${this.getMdnUrl()}
class ${className} extends ${this.parentTagClass} {
    ${this.generateTagConstructor()}
    ${this.generateFactoryConstructor()}
}

${this.getExportStatement()}`
    }


    getImportStatements() {
        return this.getParentTagImportStatement() + "\n" + this.getChildrenTypeImportStatement();
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
        const className = this.className;

        const attributesParameterType = this.generateAttributesParameterType();
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
        return `export default ${this.className};`;
    }




}

export default TagCodeGenerator;