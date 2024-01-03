
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
class Iframe extends Tag {
    constructor(children?: childrenType) {
        super("iframe", children);
    }

    align(value: string) {
        this.setAttr("align", value);
    }

    allow(value: string) {
        this.setAttr("allow", value);
    }

    csp(value: string) {
        this.setAttr("csp", value);
    }

    height(value: string) {
        this.setAttr("height", value);
    }

    loading(value: string) {
        this.setAttr("loading", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    referrerpolicy(value: string) {
        this.setAttr("referrerpolicy", value);
    }

    sandbox(value: string) {
        this.setAttr("sandbox", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    srcdoc(value: string) {
        this.setAttr("srcdoc", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }

}

export default Iframe;
