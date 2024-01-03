
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
class Dialog extends Tag {
    constructor(children?: childrenType) {
        super("dialog", children);
    }
    
    open(value: string) {
        this.setAttr("open", value);
    }

}

export default Dialog;
    