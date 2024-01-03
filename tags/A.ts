
import { Tag, childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
class A extends Tag {
    constructor(children?: childrenType) {
        super("a", children);
    }

    download(value: string) {
        this.setAttr("download", value);
    }

    href(value: string) {
        this.setAttr("href", value);
    }

    hreflang(value: string) {
        this.setAttr("hreflang", value);
    }

    media(value: string) {
        this.setAttr("media", value);
    }

    ping(value: string) {
        this.setAttr("ping", value);
    }

    referrerpolicy(value: string) {
        this.setAttr("referrerpolicy", value);
    }

    rel(value: string) {
        this.setAttr("rel", value);
    }

    shape(value: string) {
        this.setAttr("shape", value);
    }

    target(value: string) {
        this.setAttr("target", value);
    }

}

export default A;
