
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
class Li extends Tag {
    constructor(children?: childrenType) {
        super("li", children);
    }
    
    value(value: string) {
        this.setAttr("value", value);
    }

}

export default Li;
    