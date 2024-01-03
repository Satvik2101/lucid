
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
class Ol extends Tag {
    constructor(children?: childrenType) {
        super("ol", children);
    }
    
    reversed(value: string) {
        this.setAttr("reversed", value);
    }

    start(value: string) {
        this.setAttr("start", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }

}

export default Ol;
    