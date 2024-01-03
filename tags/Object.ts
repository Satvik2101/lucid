
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
class Object extends Tag {
    constructor(children?: childrenType) {
        super("object", children);
    }

    border(value: string) {
        this.setAttr("border", value);
    }

    data(value: string) {
        this.setAttr("data", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    height(value: string) {
        this.setAttr("height", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }

    usemap(value: string) {
        this.setAttr("usemap", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }

}

export default Object;
