
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
class Script extends Tag {
    constructor(children?: childrenType) {
        super("script", children);
    }
    
    async(value: string) {
        this.setAttr("async", value);
    }

    crossorigin(value: string) {
        this.setAttr("crossorigin", value);
    }

    defer(value: string) {
        this.setAttr("defer", value);
    }

    integrity(value: string) {
        this.setAttr("integrity", value);
    }

    language(value: string) {
        this.setAttr("language", value);
    }

    referrerpolicy(value: string) {
        this.setAttr("referrerpolicy", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }

}

export default Script;
    