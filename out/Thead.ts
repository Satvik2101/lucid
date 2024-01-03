
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
class Thead extends Tag {
    constructor(children?: childrenType) {
        super("thead", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

}

export default Thead;
    