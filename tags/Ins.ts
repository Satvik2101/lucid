
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ins
class Ins extends Tag {
    constructor(children?: childrenType) {
        super("ins", children);
    }
    
    cite(value?: string) {
        if(value) this.setAttr("cite", value);
    }

    datetime(value?: string) {
        if(value) this.setAttr("datetime", value);
    }

}

export default Ins;
    