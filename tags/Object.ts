
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
class Object extends Tag {
    constructor(children?: childrenType) {
        super("object", children);
    }
    
    border(value?: string) {
        if(value) this.setAttr("border", value);
    }

    data(value?: string) {
        if(value) this.setAttr("data", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

    usemap(value?: string) {
        if(value) this.setAttr("usemap", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }

}

export default Object;
    