
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
class Colgroup extends Tag {
    constructor(children?: childrenType) {
        super("colgroup", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

    span(value: string) {
        this.setAttr("span", value);
    }

}

export default Colgroup;
    