
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
class Tbody extends Tag {
    constructor(children?: childrenType) {
        super("tbody", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

}

export default Tbody;
    