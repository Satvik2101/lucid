
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
class Label extends Tag {
    constructor(children?: childrenType) {
        super("label", children);
    }
    
    for(value?: string) {
        if(value) this.setAttr("for", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

}

export default Label;
    