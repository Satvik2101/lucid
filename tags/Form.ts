
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
class Form extends Tag {
    constructor(children?: childrenType) {
        super("form", children);
    }
    
    accept(value?: string) {
        if(value) this.setAttr("accept", value);
    }

    accept_charset(value?: string) {
        if(value) this.setAttr("accept-charset", value);
    }

    action(value?: string) {
        if(value) this.setAttr("action", value);
    }

    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
    }

    enctype(value?: string) {
        if(value) this.setAttr("enctype", value);
    }

    method(value?: string) {
        if(value) this.setAttr("method", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    novalidate(value?: string) {
        if(value) this.setAttr("novalidate", value);
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
    }

}

export default Form;
    