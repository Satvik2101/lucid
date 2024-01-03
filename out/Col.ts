
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
class Col extends VoidTag {
    constructor() {
        super("col");
    }

    
    align(value: string) {
        this.setAttr("align", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

    span(value: string) {
        this.setAttr("span", value);
    }
}
    
export default Col;