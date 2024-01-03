
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
class Option extends Tag {
    constructor(children?: childrenType) {
        super("option", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    label(value?: string) {
        if(value) this.setAttr("label", value);
    }

    selected(value?: string) {
        if(value) this.setAttr("selected", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }

}

export default Option;
    