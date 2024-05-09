import TagCodeGenerator from "./TagCodeGenerator";
import TagRegistry from "./TagRegistry";
import TagTestGeneratorWithLocalAttributeTests from "./test-generators/TagTestGeneratorWithLocalAttributeTests";
class TagCodeGeneratorWithLocalAttributeSetters extends TagCodeGenerator {

    localAttributes: string[];

    constructor(tagName: string, localAttributes: string[], globalAttributes: string[]) {
        super(tagName, [...localAttributes, ...globalAttributes]);
        this.localAttributes = localAttributes;
    }

    generateSetterForAttribute(attribute: string) {
        const functionName = TagRegistry.getFunctionNameForAttribute(attribute);
        const attributeSetterFunctionString = `
    ${functionName}(value?: string) {
        this.setAttr("${attribute}", value);
        return this;
    }`;
        return attributeSetterFunctionString;

    }

    getTestGenerator() {
        if (this.testGenerator == null) {
            this.testGenerator = new TagTestGeneratorWithLocalAttributeTests(this.tagName, this.className, this.attributes, this.localAttributes);
        }
        return this.testGenerator;
    }

    generateLocalAttributeSetters() {
        var start = "";
        for (var i = 0; i < this.localAttributes.length; i++) {
            var attri = this.localAttributes[i];
            start += this.generateSetterForAttribute(attri);
        }
        return start;
    }

    //Override
    generateClassCode() {
        const className = this.className;
        return `${this.getImportStatements()}


//${this.getMdnUrl()}
class ${className} extends ${this.parentTagClass} {
    ${this.generateTagConstructor()}
    ${this.generateLocalAttributeSetters()}
    ${this.generateFactoryConstructor()}
}
${this.getExportStatement()}`
    }
}

export default TagCodeGeneratorWithLocalAttributeSetters;