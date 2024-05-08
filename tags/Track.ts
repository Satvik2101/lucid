import VoidTag from "../utils/VoidTag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
class Track extends VoidTag {
    constructor() {
        super("track");
    }
    
    default(value?: string) {
        this.setAttr("default", value);
        return this;
    }
    kind(value?: string) {
        this.setAttr("kind", value);
        return this;
    }
    label(value?: string) {
        this.setAttr("label", value);
        return this;
    }
    src(value?: string) {
        this.setAttr("src", value);
        return this;
    }
    srclang(value?: string) {
        this.setAttr("srclang", value);
        return this;
    }
    static withAttributes(attri: {
		"default"?: string,
		"kind"?: string,
		"label"?: string,
		"src"?: string,
		"srclang"?: string,
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
	}): Track {
        var tag = new Track();
        tag.attrs(attri);
        return tag;
    }
}
export default Track;