
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
class Track extends VoidTag {
    constructor() {
        super("track");
    }

    
    default(value?: string) {
        if(value) this.setAttr("default", value);
    }

    kind(value?: string) {
        if(value) this.setAttr("kind", value);
    }

    label(value?: string) {
        if(value) this.setAttr("label", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    srclang(value?: string) {
        if(value) this.setAttr("srclang", value);
    }
}
    
export default Track;