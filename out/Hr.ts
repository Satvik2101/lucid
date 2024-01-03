
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
class Hr extends VoidTag {
    constructor() {
        super("hr");
    }

    
    align(value: string) {
        this.setAttr("align", value);
    }

    color(value: string) {
        this.setAttr("color", value);
    }
}
    
export default Hr;