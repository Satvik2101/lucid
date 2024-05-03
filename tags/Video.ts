import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
class Video extends Tag {
    constructor(children?: childrenType) {
        super("video", children);
    }
    
    autoplay(value?: string) {
        this.setAttr("autoplay", value);
        return this;
    }
    buffered(value?: string) {
        this.setAttr("buffered", value);
        return this;
    }
    controls(value?: string) {
        this.setAttr("controls", value);
        return this;
    }
    crossorigin(value?: string) {
        this.setAttr("crossorigin", value);
        return this;
    }
    height(value?: string) {
        this.setAttr("height", value);
        return this;
    }
    loop(value?: string) {
        this.setAttr("loop", value);
        return this;
    }
    muted(value?: string) {
        this.setAttr("muted", value);
        return this;
    }
    playsinline(value?: string) {
        this.setAttr("playsinline", value);
        return this;
    }
    poster(value?: string) {
        this.setAttr("poster", value);
        return this;
    }
    preload(value?: string) {
        this.setAttr("preload", value);
        return this;
    }
    src(value?: string) {
        this.setAttr("src", value);
        return this;
    }
    width(value?: string) {
        this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri: {
		"autoplay"?: string,
		"buffered"?: string,
		"controls"?: string,
		"crossorigin"?: string,
		"height"?: string,
		"loop"?: string,
		"muted"?: string,
		"playsinline"?: string,
		"poster"?: string,
		"preload"?: string,
		"src"?: string,
		"width"?: string,
		"accesskey"?: string,
		"autocapitalize"?: string,
		"class"?: string,
		"contenteditable"?: string,
		"contextmenu"?: string,
		"dir"?: string,
		"draggable"?: string,
		"hidden"?: string,
		"id"?: string,
		"itemprop"?: string,
		"lang"?: string,
		"role"?: string,
		"slot"?: string,
		"spellcheck"?: string,
		"style"?: string,
		"tabindex"?: string,
		"title"?: string,
		"translate"?: string,
		[key: string]: any
	}, children?: childrenType): Video {
            var tag = new Video(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Video;