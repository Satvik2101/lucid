
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
class Script extends Tag {
    constructor(children?: childrenType) {
        super("script", children);
    }
    
    async(value?: string) {
        if(value) this.setAttr("async", value);
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    defer(value?: string) {
        if(value) this.setAttr("defer", value);
    }

    integrity(value?: string) {
        if(value) this.setAttr("integrity", value);
    }

    language(value?: string) {
        if(value) this.setAttr("language", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

}

export default Script;
    