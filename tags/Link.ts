
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
class Link extends VoidTag {
    constructor() {
        super("link");
    }

    
    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    href(value?: string) {
        if(value) this.setAttr("href", value);
    }

    hreflang(value?: string) {
        if(value) this.setAttr("hreflang", value);
    }

    integrity(value?: string) {
        if(value) this.setAttr("integrity", value);
    }

    media(value?: string) {
        if(value) this.setAttr("media", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    rel(value?: string) {
        if(value) this.setAttr("rel", value);
    }

    sizes(value?: string) {
        if(value) this.setAttr("sizes", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }
}
    
export default Link;