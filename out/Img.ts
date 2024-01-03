
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
class Img extends VoidTag {
    constructor() {
        super("img");
    }

    
    align(value: string) {
        this.setAttr("align", value);
    }

    alt(value: string) {
        this.setAttr("alt", value);
    }

    border(value: string) {
        this.setAttr("border", value);
    }

    crossorigin(value: string) {
        this.setAttr("crossorigin", value);
    }

    decoding(value: string) {
        this.setAttr("decoding", value);
    }

    height(value: string) {
        this.setAttr("height", value);
    }

    intrinsicsize(value: string) {
        this.setAttr("intrinsicsize", value);
    }

    ismap(value: string) {
        this.setAttr("ismap", value);
    }

    loading(value: string) {
        this.setAttr("loading", value);
    }

    referrerpolicy(value: string) {
        this.setAttr("referrerpolicy", value);
    }

    sizes(value: string) {
        this.setAttr("sizes", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    srcset(value: string) {
        this.setAttr("srcset", value);
    }

    usemap(value: string) {
        this.setAttr("usemap", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }
}
    
export default Img;