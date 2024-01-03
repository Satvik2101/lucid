
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/q
class Q extends Tag {
    constructor(children?: childrenType) {
        super("q", children);
    }
    
    cite(value: string) {
        this.setAttr("cite", value);
    }

}

export default Q;
    