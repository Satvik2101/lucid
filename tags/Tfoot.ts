
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
class Tfoot extends Tag {
    constructor(children?: childrenType) {
        super("tfoot", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

}

export default Tfoot;
    