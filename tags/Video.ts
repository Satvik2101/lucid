
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
class Video extends Tag {
    constructor(children?: childrenType) {
        super("video", children);
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

    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    loop(value?: string) {
        if(value) this.setAttr("loop", value);
    }

    muted(value?: string) {
        if(value) this.setAttr("muted", value);
    }

    playsinline(value?: string) {
        if(value) this.setAttr("playsinline", value);
    }

    poster(value?: string) {
        if(value) this.setAttr("poster", value);
    }

    preload(value?: string) {
        if(value) this.setAttr("preload", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }

}

export default Video;
    