
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
class Button extends Tag {
    constructor(children?: childrenType) {
        super("button", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    formaction(value?: string) {
        if(value) this.setAttr("formaction", value);
    }

    formenctype(value?: string) {
        if(value) this.setAttr("formenctype", value);
    }

    formmethod(value?: string) {
        if(value) this.setAttr("formmethod", value);
    }

    formnovalidate(value?: string) {
        if(value) this.setAttr("formnovalidate", value);
    }

    formtarget(value?: string) {
        if(value) this.setAttr("formtarget", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }

}

export default Button;
    