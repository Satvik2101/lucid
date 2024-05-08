const TagCodeGenerator = require("./TagCodeGenerator");
const TagTestGeneratorWithLocalAttributeTests = require("./test-generators/TagTestGeneratorWithLocalAttributeTests");
class TagCodeGeneratorWithLocalAttributeSetters extends TagCodeGenerator {

    constructor(tagName, localAttributes, globalAttributes) {
        super(tagName, [...localAttributes, ...globalAttributes]);
        this.localAttributes = localAttributes;
    }

    generateSetterForAttribute(attribute) {
        const functionName = this.replaceDashWithUnderscore(attribute);
        const attributeSetterFunctionString = `
    ${functionName}(value?: string) {
        this.setAttr("${attribute}", value);
        return this;
    }`;
        return attributeSetterFunctionString;

    }

    getTestGenerator() {
        if (this.testGenerator == null) {
            this.testGenerator = new TagTestGeneratorWithLocalAttributeTests(this.tagName, this.getClassName(), this.attributes, this.localAttributes);
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
        const className = this.getClassName();
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

module.exports = TagCodeGeneratorWithLocalAttributeSetters;