
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
class Meta extends VoidTag {
    constructor() {
        super("meta");
    }


    charset(value: string) {
        this.setAttr("charset", value);
    }

    content(value: string) {
        this.setAttr("content", value);
    }

    http_equiv(value: string) {
        this.setAttr("http-equiv", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }
}

export default Meta;