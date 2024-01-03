
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
class Data extends Tag {
    constructor(children?: childrenType) {
        super("data", children);
    }

    value(value: string) {
        this.setAttr("value", value);
    }

}

export default Data;
