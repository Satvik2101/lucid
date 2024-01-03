
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
class Del extends Tag {
    constructor(children?: childrenType) {
        super("del", children);
    }
    
    cite(value: string) {
        this.setAttr("cite", value);
    }

    datetime(value: string) {
        this.setAttr("datetime", value);
    }

}

export default Del;
    