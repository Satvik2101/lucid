
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
class Del extends Tag {
    constructor(children?: childrenType) {
        super("del", children);
    }
    
    cite(value?: string) {
        if(value) this.setAttr("cite", value);
    }

    datetime(value?: string) {
        if(value) this.setAttr("datetime", value);
    }

}

export default Del;
    