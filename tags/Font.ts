
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font
class Font extends Tag {
    constructor(children?: childrenType) {
        super("font", children);
    }

    color(value: string) {
        this.setAttr("color", value);
    }

}

export default Font;
