const TagCodeGenerator = require("./TagCodeGenerator");
const TagCodeGeneratorWithLocalAttributeSetters = require("./TagCodeGeneratorWithLocalAttributeSetters");
const TagRegistry = require("./TagRegistry");
const VoidTagCodeGenerator = require("./VoidTagCodeGenerator");

class TagCodeGeneratorFactory {
    constructor() {
        this.registry = new TagRegistry();
    }

    getTagCodeGenetator(tag) {
        const tagLocalAttriburtes = this.registry.getTagAttributes(tag);
        const globalAttributes = this.registry.getGlobalAttributes();
        const isVoid = this.registry.isVoid(tag);
        if (isVoid) {
            return new VoidTagCodeGenerator(tag, tagLocalAttriburtes, globalAttributes);
        } else if (tagLocalAttriburtes.length == 0) {
            return new TagCodeGenerator(tag, globalAttributes);
        } else {
            return new TagCodeGeneratorWithLocalAttributeSetters(tag, tagLocalAttriburtes, globalAttributes);
        }
    }
}

module.exports = TagCodeGeneratorFactory;