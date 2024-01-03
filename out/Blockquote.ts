
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
class Blockquote extends Tag {
    constructor(children?: childrenType) {
        super("blockquote", children);
    }
    
    cite(value: string) {
        this.setAttr("cite", value);
    }

}

export default Blockquote;
    