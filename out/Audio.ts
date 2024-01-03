
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
class Audio extends Tag {
    constructor(children?: childrenType) {
        super("audio", children);
    }
    
    autoplay(value: string) {
        this.setAttr("autoplay", value);
    }

    buffered(value: string) {
        this.setAttr("buffered", value);
    }

    controls(value: string) {
        this.setAttr("controls", value);
    }

    crossorigin(value: string) {
        this.setAttr("crossorigin", value);
    }

    loop(value: string) {
        this.setAttr("loop", value);
    }

    muted(value: string) {
        this.setAttr("muted", value);
    }

    preload(value: string) {
        this.setAttr("preload", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

}

export default Audio;
    