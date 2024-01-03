
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
class Html extends Tag {
    constructor(children?: childrenType) {
        super("html", children);
    }
    
    manifest(value?: string) {
        if(value) this.setAttr("manifest", value);
    }

}

export default Html;
    