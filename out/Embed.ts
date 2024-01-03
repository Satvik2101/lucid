
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
class Embed extends VoidTag {
    constructor() {
        super("embed");
    }

    
    height(value: string) {
        this.setAttr("height", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }
}
    
export default Embed;