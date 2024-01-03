
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
class Fieldset extends Tag {
    constructor(children?: childrenType) {
        super("fieldset", children);
    }

    disabled(value: string) {
        this.setAttr("disabled", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

}

export default Fieldset;
