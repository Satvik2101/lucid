
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
class Output extends Tag {
    constructor(children?: childrenType) {
        super("output", children);
    }

    for(value: string) {
        this.setAttr("for", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

}

export default Output;
