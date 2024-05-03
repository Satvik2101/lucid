import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style
class Style extends Tag {
    constructor(children?: childrenType) {
        super("style", children);
    }
    
    media(value?: string) {
        this.setAttr("media", value);
        return this;
    }
    scoped(value?: string) {
        this.setAttr("scoped", value);
        return this;
    }
    type(value?: string) {
        this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri: {
		"media"?: string,
		"scoped"?: string,
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
	}, children?: childrenType): Style {
            var tag = new Style(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Style;