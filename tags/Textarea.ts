
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
class Textarea extends Tag {
    constructor(children?: childrenType) {
        super("textarea", children);
    }

    autocomplete(value: string) {
        this.setAttr("autocomplete", value);
    }

    cols(value: string) {
        this.setAttr("cols", value);
    }

    dirname(value: string) {
        this.setAttr("dirname", value);
    }

    disabled(value: string) {
        this.setAttr("disabled", value);
    }

    enterkeyhint(value: string) {
        this.setAttr("enterkeyhint", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    inputmode(value: string) {
        this.setAttr("inputmode", value);
    }

    maxlength(value: string) {
        this.setAttr("maxlength", value);
    }

    minlength(value: string) {
        this.setAttr("minlength", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    placeholder(value: string) {
        this.setAttr("placeholder", value);
    }

    readonly(value: string) {
        this.setAttr("readonly", value);
    }

    required(value: string) {
        this.setAttr("required", value);
    }

    rows(value: string) {
        this.setAttr("rows", value);
    }

    wrap(value: string) {
        this.setAttr("wrap", value);
    }

}

export default Textarea;
