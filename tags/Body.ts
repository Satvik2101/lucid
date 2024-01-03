
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
class Body extends Tag {
    constructor(children?: childrenType) {
        super("body", children);
    }
    
    background(value?: string) {
        if(value) this.setAttr("background", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

}

export default Body;
    