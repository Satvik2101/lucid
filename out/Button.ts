
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
class Button extends Tag {
    constructor(children?: childrenType) {
        super("button", children);
    }
    
    disabled(value: string) {
        this.setAttr("disabled", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    formaction(value: string) {
        this.setAttr("formaction", value);
    }

    formenctype(value: string) {
        this.setAttr("formenctype", value);
    }

    formmethod(value: string) {
        this.setAttr("formmethod", value);
    }

    formnovalidate(value: string) {
        this.setAttr("formnovalidate", value);
    }

    formtarget(value: string) {
        this.setAttr("formtarget", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }

    value(value: string) {
        this.setAttr("value", value);
    }

}

export default Button;
    