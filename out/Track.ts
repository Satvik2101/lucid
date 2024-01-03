
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
class Track extends VoidTag {
    constructor() {
        super("track");
    }

    
    default(value: string) {
        this.setAttr("default", value);
    }

    kind(value: string) {
        this.setAttr("kind", value);
    }

    label(value: string) {
        this.setAttr("label", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    srclang(value: string) {
        this.setAttr("srclang", value);
    }
}
    
export default Track;