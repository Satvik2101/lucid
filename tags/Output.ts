
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
class Output extends Tag {
    constructor(children?: childrenType) {
        super("output", children);
    }
    
    for(value?: string) {
        if(value) this.setAttr("for", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

}

export default Output;
    