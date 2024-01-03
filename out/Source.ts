
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
class Source extends VoidTag {
    constructor() {
        super("source");
    }

    
    media(value: string) {
        this.setAttr("media", value);
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

    type(value: string) {
        this.setAttr("type", value);
    }
}
    
export default Source;