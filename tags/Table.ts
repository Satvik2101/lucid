
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
class Table extends Tag {
    constructor(children?: childrenType) {
        super("table", children);
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

    border(value?: string) {
        if(value) this.setAttr("border", value);
    }

    summary(value?: string) {
        if(value) this.setAttr("summary", value);
    }

}

export default Table;
    