import VoidTag from "../utils/VoidTag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
class Meta extends VoidTag {
    constructor() {
                super("meta");
            }
    
    charset(value?: string) {
        if (value) this.setAttr("charset", value);
        return this;
    }
    content(value?: string) {
        if (value) this.setAttr("content", value);
        return this;
    }
    http_equiv(value?: string) {
        if (value) this.setAttr("http-equiv", value);
        return this;
    }
    name(value?: string) {
        if (value) this.setAttr("name", value);
        return this;
    }
    property(value?: string) {
        if (value) this.setAttr("property", value);
        return this;
    }
    static withAttributes(attri: {
		"charset"?: string,
		"content"?: string,
		"http-equiv"?: string,
		"name"?: string,
		"property"?: string,
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
	}): Meta {
                var tag = new Meta();
                tag.attrs(attri);
                return tag;
            }
}
export default Meta;