
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
class Base extends VoidTag {
    constructor() {
        super("base");
    }

    
    href(value?: string) {
        if(value) this.setAttr("href", value);
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
    }
}
    
export default Base;