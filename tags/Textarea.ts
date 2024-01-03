
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
class Textarea extends Tag {
    constructor(children?: childrenType) {
        super("textarea", children);
    }
    
    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
    }

    cols(value?: string) {
        if(value) this.setAttr("cols", value);
    }

    dirname(value?: string) {
        if(value) this.setAttr("dirname", value);
    }

    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    enterkeyhint(value?: string) {
        if(value) this.setAttr("enterkeyhint", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    inputmode(value?: string) {
        if(value) this.setAttr("inputmode", value);
    }

    maxlength(value?: string) {
        if(value) this.setAttr("maxlength", value);
    }

    minlength(value?: string) {
        if(value) this.setAttr("minlength", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    placeholder(value?: string) {
        if(value) this.setAttr("placeholder", value);
    }

    readonly(value?: string) {
        if(value) this.setAttr("readonly", value);
    }

    required(value?: string) {
        if(value) this.setAttr("required", value);
    }

    rows(value?: string) {
        if(value) this.setAttr("rows", value);
    }

    wrap(value?: string) {
        if(value) this.setAttr("wrap", value);
    }

}

export default Textarea;
    