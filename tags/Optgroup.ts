
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
class Optgroup extends Tag {
    constructor(children?: childrenType) {
        super("optgroup", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    label(value?: string) {
        if(value) this.setAttr("label", value);
    }

}

export default Optgroup;
    