import VoidTag from "../utils/VoidTag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link
class Link extends VoidTag {
    constructor() {
                super("link");
            }
    
    crossorigin(value?: string) {
        this.setAttr("crossorigin", value);
        return this;
    }
    href(value?: string) {
        this.setAttr("href", value);
        return this;
    }
    hreflang(value?: string) {
        this.setAttr("hreflang", value);
        return this;
    }
    integrity(value?: string) {
        this.setAttr("integrity", value);
        return this;
    }
    media(value?: string) {
        this.setAttr("media", value);
        return this;
    }
    referrerpolicy(value?: string) {
        this.setAttr("referrerpolicy", value);
        return this;
    }
    rel(value?: string) {
        this.setAttr("rel", value);
        return this;
    }
    sizes(value?: string) {
        this.setAttr("sizes", value);
        return this;
    }
    type(value?: string) {
        this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri: {
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
                var tag = new Link();
                tag.attrs(attri);
                return tag;
            }
}
export default Link;