import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
class Rt extends Tag {
    constructor(children?: childrenType) {
        super("rt", children);
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
	}, children?: childrenType): Rt {
            var tag = new Rt(children);
            tag.attrs(attri);
            return tag;
        }
}

export default Rt;