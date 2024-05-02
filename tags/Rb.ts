import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb
class Rb extends Tag {
    constructor(children?: childrenType) {
        super("rb", children);
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
	}, children?: childrenType): Rb {
            var tag = new Rb(children);
            tag.attrs(attri);
            return tag;
        }
}

export default Rb;