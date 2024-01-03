
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
class Select extends Tag {
    constructor(children?: childrenType) {
        super("select", children);
    }
    
    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
    }

    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    multiple(value?: string) {
        if(value) this.setAttr("multiple", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    required(value?: string) {
        if(value) this.setAttr("required", value);
    }

    size(value?: string) {
        if(value) this.setAttr("size", value);
    }

}

export default Select;
    