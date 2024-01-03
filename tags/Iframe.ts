
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
class Iframe extends Tag {
    constructor(children?: childrenType) {
        super("iframe", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    allow(value?: string) {
        if(value) this.setAttr("allow", value);
    }

    csp(value?: string) {
        if(value) this.setAttr("csp", value);
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    loading(value?: string) {
        if(value) this.setAttr("loading", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    sandbox(value?: string) {
        if(value) this.setAttr("sandbox", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    srcdoc(value?: string) {
        if(value) this.setAttr("srcdoc", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }

}

export default Iframe;
    