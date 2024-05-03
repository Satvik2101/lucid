import VoidTag from "../utils/VoidTag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
class Img extends VoidTag {
    constructor() {
                super("img");
            }
    
    align(value?: string) {
        this.setAttr("align", value);
        return this;
    }
    alt(value?: string) {
        this.setAttr("alt", value);
        return this;
    }
    border(value?: string) {
        this.setAttr("border", value);
        return this;
    }
    crossorigin(value?: string) {
        this.setAttr("crossorigin", value);
        return this;
    }
    decoding(value?: string) {
        this.setAttr("decoding", value);
        return this;
    }
    height(value?: string) {
        this.setAttr("height", value);
        return this;
    }
    intrinsicsize(value?: string) {
        this.setAttr("intrinsicsize", value);
        return this;
    }
    ismap(value?: string) {
        this.setAttr("ismap", value);
        return this;
    }
    loading(value?: string) {
        this.setAttr("loading", value);
        return this;
    }
    referrerpolicy(value?: string) {
        this.setAttr("referrerpolicy", value);
        return this;
    }
    sizes(value?: string) {
        this.setAttr("sizes", value);
        return this;
    }
    src(value?: string) {
        this.setAttr("src", value);
        return this;
    }
    srcset(value?: string) {
        this.setAttr("srcset", value);
        return this;
    }
    usemap(value?: string) {
        this.setAttr("usemap", value);
        return this;
    }
    width(value?: string) {
        this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri: {
		"align"?: string,
		"alt"?: string,
		"border"?: string,
		"crossorigin"?: string,
		"decoding"?: string,
		"height"?: string,
		"intrinsicsize"?: string,
		"ismap"?: string,
		"loading"?: string,
		"referrerpolicy"?: string,
		"sizes"?: string,
		"src"?: string,
		"srcset"?: string,
		"usemap"?: string,
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
	}): Img {
                var tag = new Img();
                tag.attrs(attri);
                return tag;
            }
}
export default Img;