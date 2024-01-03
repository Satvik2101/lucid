
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
class Progress extends Tag {
    constructor(children?: childrenType) {
        super("progress", children);
    }
    
    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    max(value?: string) {
        if(value) this.setAttr("max", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }

}

export default Progress;
    