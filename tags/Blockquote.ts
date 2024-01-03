
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
class Blockquote extends Tag {
    constructor(children?: childrenType) {
        super("blockquote", children);
    }
    
    cite(value?: string) {
        if(value) this.setAttr("cite", value);
    }

}

export default Blockquote;
    