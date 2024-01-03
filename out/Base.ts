
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
class Base extends VoidTag {
    constructor() {
        super("base");
    }

    
    href(value: string) {
        this.setAttr("href", value);
    }

    target(value: string) {
        this.setAttr("target", value);
    }
}
    
export default Base;