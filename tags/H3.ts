import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
class H3 extends Tag {
    constructor(children?: childrenType) {
        super("h3", children);
    }
    static withAttributes(attri: {
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
	}, children?: childrenType): H3 {
            var tag = new H3(children);
            tag.attrs(attri);
            return tag;
        }
}

export default H3;