
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
class Tfoot extends Tag {
    constructor(children?: childrenType) {
        super("tfoot", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

}

export default Tfoot;
    