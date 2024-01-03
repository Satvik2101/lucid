
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
class Source extends VoidTag {
    constructor() {
        super("source");
    }

    
    media(value?: string) {
        if(value) this.setAttr("media", value);
    }

    sizes(value?: string) {
        if(value) this.setAttr("sizes", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    srcset(value?: string) {
        if(value) this.setAttr("srcset", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }
}
    
export default Source;