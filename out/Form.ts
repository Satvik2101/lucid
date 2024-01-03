
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
class Form extends Tag {
    constructor(children?: childrenType) {
        super("form", children);
    }
    
    accept(value: string) {
        this.setAttr("accept", value);
    }

    accept_charset(value: string) {
        this.setAttr("accept-charset", value);
    }

    action(value: string) {
        this.setAttr("action", value);
    }

    autocomplete(value: string) {
        this.setAttr("autocomplete", value);
    }

    enctype(value: string) {
        this.setAttr("enctype", value);
    }

    method(value: string) {
        this.setAttr("method", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    novalidate(value: string) {
        this.setAttr("novalidate", value);
    }

    target(value: string) {
        this.setAttr("target", value);
    }

}

export default Form;
    