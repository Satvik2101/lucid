
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
class Link extends VoidTag {
    constructor() {
        super("link");
    }

    
    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    href(value?: string) {
        if(value) this.setAttr("href", value);
    }

    hreflang(value?: string) {
        if(value) this.setAttr("hreflang", value);
    }

    integrity(value?: string) {
        if(value) this.setAttr("integrity", value);
    }

    media(value?: string) {
        if(value) this.setAttr("media", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    rel(value?: string) {
        if(value) this.setAttr("rel", value);
    }

    sizes(value?: string) {
        if(value) this.setAttr("sizes", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }



    static withAttributes(attri:{
		"crossorigin"?: string,
		"href"?: string,
		"hreflang"?: string,
		"integrity"?: string,
		"media"?: string,
		"referrerpolicy"?: string,
		"rel"?: string,
		"sizes"?: string,
		"type"?: string,
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
	}): Link {
        var tag = new Link;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Link;