
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
class Audio extends Tag {
    constructor(children?: childrenType) {
        super("audio", children);
    }
    
    autoplay(value?: string) {
        if(value) this.setAttr("autoplay", value);
    }

    buffered(value?: string) {
        if(value) this.setAttr("buffered", value);
    }

    controls(value?: string) {
        if(value) this.setAttr("controls", value);
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    loop(value?: string) {
        if(value) this.setAttr("loop", value);
    }

    muted(value?: string) {
        if(value) this.setAttr("muted", value);
    }

    preload(value?: string) {
        if(value) this.setAttr("preload", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

}

export default Audio;
    