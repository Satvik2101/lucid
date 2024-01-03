
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
class Tr extends Tag {
    constructor(children?: childrenType) {
        super("tr", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

}

export default Tr;
    