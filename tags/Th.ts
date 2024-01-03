
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
class Th extends Tag {
    constructor(children?: childrenType) {
        super("th", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    background(value?: string) {
        if(value) this.setAttr("background", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

    colspan(value?: string) {
        if(value) this.setAttr("colspan", value);
    }

    headers(value?: string) {
        if(value) this.setAttr("headers", value);
    }

    rowspan(value?: string) {
        if(value) this.setAttr("rowspan", value);
    }

    scope(value?: string) {
        if(value) this.setAttr("scope", value);
    }

}

export default Th;
    