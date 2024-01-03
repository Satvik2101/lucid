
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
class Style extends Tag {
    constructor(children?: childrenType) {
        super("style", children);
    }
    
    media(value?: string) {
        if(value) this.setAttr("media", value);
    }

    scoped(value?: string) {
        if(value) this.setAttr("scoped", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

}

export default Style;
    