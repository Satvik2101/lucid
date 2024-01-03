
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
class Area extends VoidTag {
    constructor() {
        super("area");
    }

    
    alt(value: string) {
        this.setAttr("alt", value);
    }

    coords(value: string) {
        this.setAttr("coords", value);
    }

    download(value: string) {
        this.setAttr("download", value);
    }

    href(value: string) {
        this.setAttr("href", value);
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
    
export default Area;