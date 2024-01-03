
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details
class Details extends Tag {
    constructor(children?: childrenType) {
        super("details", children);
    }

    open(value: string) {
        this.setAttr("open", value);
    }

}

export default Details;
