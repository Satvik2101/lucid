
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
class Option extends Tag {
    constructor(children?: childrenType) {
        super("option", children);
    }
    
    disabled(value: string) {
        this.setAttr("disabled", value);
    }

    label(value: string) {
        this.setAttr("label", value);
    }

    selected(value: string) {
        this.setAttr("selected", value);
    }

    value(value: string) {
        this.setAttr("value", value);
    }

}

export default Option;
    