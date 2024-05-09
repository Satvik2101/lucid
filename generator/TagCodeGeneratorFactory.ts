import TagCodeGenerator from "./TagCodeGenerator";
import TagCodeGeneratorWithLocalAttributeSetters from "./TagCodeGeneratorWithLocalAttributeSetters";
import TagRegistry from "./TagRegistry";
import VoidTagCodeGenerator from "./VoidTagCodeGenerator";
class TagCodeGeneratorFactory {
    registry: TagRegistry;
    constructor() {
        this.registry = new TagRegistry();
    }

    getTagCodeGenetator(tag: string) {
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

export default TagCodeGeneratorFactory;