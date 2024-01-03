
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
class Canvas extends Tag {
    constructor(children?: childrenType) {
        super("canvas", children);
    }
    
    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }

}

export default Canvas;
    