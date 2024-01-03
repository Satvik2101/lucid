
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
class Dialog extends Tag {
    constructor(children?: childrenType) {
        super("dialog", children);
    }
    
    open(value?: string) {
        if(value) this.setAttr("open", value);
    }

}

export default Dialog;
    