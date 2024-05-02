import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tfoot
class Tfoot extends Tag {
    constructor(children?: childrenType) {
        super("tfoot", children);
    }
    
    align(value?: string) {
        if (value) this.setAttr("align", value);
        return this;
    }
    bgcolor(value?: string) {
        if (value) this.setAttr("bgcolor", value);
        return this;
    }
    static withAttributes(attri: {
		"align"?: string,
		"bgcolor"?: string,
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
	}, children?: childrenType): Tfoot {
            var tag = new Tfoot(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Tfoot;