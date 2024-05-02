import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/font
class Font extends Tag {
    constructor(children?: childrenType) {
        super("font", children);
    }
    
    color(value?: string) {
        if (value) this.setAttr("color", value);
        return this;
    }
    static withAttributes(attri: {
		"color"?: string,
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
	}, children?: childrenType): Font {
            var tag = new Font(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Font;