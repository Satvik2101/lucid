
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


    static withAttributes(attri:{
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
    