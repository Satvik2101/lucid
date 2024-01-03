
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
class Caption extends Tag {
    constructor(children?: childrenType) {
        super("caption", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

}

export default Caption;
    