
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/colgroup
class Colgroup extends Tag {
    constructor(children?: childrenType) {
        super("colgroup", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

    span(value?: string) {
        if(value) this.setAttr("span", value);
    }

}

export default Colgroup;
    