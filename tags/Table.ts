
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
class Table extends Tag {
    constructor(children?: childrenType) {
        super("table", children);
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

    border(value: string) {
        this.setAttr("border", value);
    }

    summary(value: string) {
        this.setAttr("summary", value);
    }

}

export default Table;
