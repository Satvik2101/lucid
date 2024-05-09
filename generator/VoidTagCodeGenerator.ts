import TagCodeGeneratorWithLocalAttributeSetters from "./TagCodeGeneratorWithLocalAttributeSetters";

class VoidTagCodeGenerator extends TagCodeGeneratorWithLocalAttributeSetters {

    constructor(tagName: string, localAttributes: string[], globalAttributes: string[]) {
        super(tagName, localAttributes, globalAttributes);
        this.parentTagClass = "VoidTag";
    }

    generateTagConstructor() {
        return `constructor() {
        super("${this.tagName}");
    }`
    }

    generateFactoryConstructor() {
        const className = this.getClassName();

        const attributesParameterType = this.generateAttributesParameterType();
        var start = `static withAttributes(attri: ${attributesParameterType}): ${className} {
        var tag = new ${className}();
        tag.attrs(attri);
        return tag;
    }`

        return start;
    }
}

export default VoidTagCodeGenerator;