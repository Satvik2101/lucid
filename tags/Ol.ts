
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
class Ol extends Tag {
    constructor(children?: childrenType) {
        super("ol", children);
    }
    
    reversed(value?: string) {
        if(value) this.setAttr("reversed", value);
    }

    start(value?: string) {
        if(value) this.setAttr("start", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

}

export default Ol;
    