
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
class Hr extends VoidTag {
    constructor() {
        super("hr");
    }

    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    color(value?: string) {
        if(value) this.setAttr("color", value);
    }
}
    
export default Hr;