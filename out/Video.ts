
import { Tag,childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
class Video extends Tag {
    constructor(children?: childrenType) {
        super("video", children);
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

    height(value: string) {
        this.setAttr("height", value);
    }

    loop(value: string) {
        this.setAttr("loop", value);
    }

    muted(value: string) {
        this.setAttr("muted", value);
    }

    playsinline(value: string) {
        this.setAttr("playsinline", value);
    }

    poster(value: string) {
        this.setAttr("poster", value);
    }

    preload(value: string) {
        this.setAttr("preload", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }

}

export default Video;
    