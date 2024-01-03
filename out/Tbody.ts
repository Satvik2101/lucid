
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
class Tbody extends Tag {
    constructor(children?: childrenType) {
        super("tbody", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

}

export default Tbody;
    