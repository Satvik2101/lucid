
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
class Meta extends VoidTag {
    constructor() {
        super("meta");
    }

    
    charset(value?: string) {
        if(value) this.setAttr("charset", value);
    }

    content(value?: string) {
        if(value) this.setAttr("content", value);
    }

    http_equiv(value?: string) {
        if(value) this.setAttr("http-equiv", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }
}
    
export default Meta;