
import VoidTag from "../utils/VoidTag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
class Img extends VoidTag {
    constructor() {
        super("img");
    }

    
    align(value?: string) {
        if(value) this.setAttr("align", value);
        return this;
    }

    alt(value?: string) {
        if(value) this.setAttr("alt", value);
        return this;
    }

    border(value?: string) {
        if(value) this.setAttr("border", value);
        return this;
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
        return this;
    }

    decoding(value?: string) {
        if(value) this.setAttr("decoding", value);
        return this;
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
        return this;
    }

    intrinsicsize(value?: string) {
        if(value) this.setAttr("intrinsicsize", value);
        return this;
    }

    ismap(value?: string) {
        if(value) this.setAttr("ismap", value);
        return this;
    }

    loading(value?: string) {
        if(value) this.setAttr("loading", value);
        return this;
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
        return this;
    }

    sizes(value?: string) {
        if(value) this.setAttr("sizes", value);
        return this;
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
        return this;
    }

    srcset(value?: string) {
        if(value) this.setAttr("srcset", value);
        return this;
    }

    usemap(value?: string) {
        if(value) this.setAttr("usemap", value);
        return this;
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
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
        var tag = new Img;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Img;