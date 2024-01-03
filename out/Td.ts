
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/td
class Td extends Tag {
    constructor(children?: childrenType) {
        super("td", children);
    }
    
    align(value: string) {
        this.setAttr("align", value);
    }

    background(value: string) {
        this.setAttr("background", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

    colspan(value: string) {
        this.setAttr("colspan", value);
    }

    headers(value: string) {
        this.setAttr("headers", value);
    }

    rowspan(value: string) {
        this.setAttr("rowspan", value);
    }

}

export default Td;
    