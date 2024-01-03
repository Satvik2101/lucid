
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
class Link extends VoidTag {
    constructor() {
        super("link");
    }


    crossorigin(value: string) {
        this.setAttr("crossorigin", value);
    }

    href(value: string) {
        this.setAttr("href", value);
    }

    hreflang(value: string) {
        this.setAttr("hreflang", value);
    }

    integrity(value: string) {
        this.setAttr("integrity", value);
    }

    media(value: string) {
        this.setAttr("media", value);
    }

    referrerpolicy(value: string) {
        this.setAttr("referrerpolicy", value);
    }

    rel(value: string) {
        this.setAttr("rel", value);
    }

    sizes(value: string) {
        this.setAttr("sizes", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }
}

export default Link;