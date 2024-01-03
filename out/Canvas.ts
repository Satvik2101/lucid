
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
class Canvas extends Tag {
    constructor(children?: childrenType) {
        super("canvas", children);
    }
    
    height(value: string) {
        this.setAttr("height", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }

}

export default Canvas;
    