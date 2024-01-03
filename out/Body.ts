
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
class Body extends Tag {
    constructor(children?: childrenType) {
        super("body", children);
    }
    
    background(value: string) {
        this.setAttr("background", value);
    }

    bgcolor(value: string) {
        this.setAttr("bgcolor", value);
    }

}

export default Body;
    