
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/contenteditable
class Contenteditable extends Tag {
    constructor(children?: childrenType) {
        super("contenteditable", children);
    }

    enterkeyhint(value: string) {
        this.setAttr("enterkeyhint", value);
    }

    inputmode(value: string) {
        this.setAttr("inputmode", value);
    }

}

export default Contenteditable;
