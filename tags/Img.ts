
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img
class Img extends VoidTag {
    constructor() {
        super("img");
    }

    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    alt(value?: string) {
        if(value) this.setAttr("alt", value);
    }

    border(value?: string) {
        if(value) this.setAttr("border", value);
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    decoding(value?: string) {
        if(value) this.setAttr("decoding", value);
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    intrinsicsize(value?: string) {
        if(value) this.setAttr("intrinsicsize", value);
    }

    ismap(value?: string) {
        if(value) this.setAttr("ismap", value);
    }

    loading(value?: string) {
        if(value) this.setAttr("loading", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    sizes(value?: string) {
        if(value) this.setAttr("sizes", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    srcset(value?: string) {
        if(value) this.setAttr("srcset", value);
    }

    usemap(value?: string) {
        if(value) this.setAttr("usemap", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }



    static withAttributes(attri:{
		align?: string,
		alt?: string,
		border?: string,
		crossorigin?: string,
		decoding?: string,
		height?: string,
		intrinsicsize?: string,
		ismap?: string,
		loading?: string,
		referrerpolicy?: string,
		sizes?: string,
		src?: string,
		srcset?: string,
		usemap?: string,
		width?: string,
		accesskey?: string,
		autocapitalize?: string,
		class?: string,
		contenteditable?: string,
		contextmenu?: string,
		dir?: string,
		draggable?: string,
		hidden?: string,
		id?: string,
		itemprop?: string,
		lang?: string,
		role?: string,
		slot?: string,
		spellcheck?: string,
		style?: string,
		tabindex?: string,
		title?: string,
		translate?: string,
		[key: string]: any
	}): Img {
        var tag = new Img;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Img;