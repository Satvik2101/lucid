
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
class Th extends Tag {
    constructor(children?: childrenType) {
        super("th", children);
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

    scope(value: string) {
        this.setAttr("scope", value);
    }

}

export default Th;
