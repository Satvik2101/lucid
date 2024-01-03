
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
class Col extends VoidTag {
    constructor() {
        super("col");
    }

    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

    span(value?: string) {
        if(value) this.setAttr("span", value);
    }
}
    
export default Col;