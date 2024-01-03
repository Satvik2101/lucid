
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
class Select extends Tag {
    constructor(children?: childrenType) {
        super("select", children);
    }

    autocomplete(value: string) {
        this.setAttr("autocomplete", value);
    }

    disabled(value: string) {
        this.setAttr("disabled", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    multiple(value: string) {
        this.setAttr("multiple", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    required(value: string) {
        this.setAttr("required", value);
    }

    size(value: string) {
        this.setAttr("size", value);
    }

}

export default Select;
