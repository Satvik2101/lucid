
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
class Embed extends VoidTag {
    constructor() {
        super("embed");
    }

    
    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }
}
    
export default Embed;