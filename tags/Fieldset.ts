
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
class Fieldset extends Tag {
    constructor(children?: childrenType) {
        super("fieldset", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

}

export default Fieldset;
    