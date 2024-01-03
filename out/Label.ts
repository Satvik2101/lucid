
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
class Label extends Tag {
    constructor(children?: childrenType) {
        super("label", children);
    }
    
    for(value: string) {
        this.setAttr("for", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

}

export default Label;
    