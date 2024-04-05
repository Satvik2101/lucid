
import UnattributedTag from "../utils/UnattributedTag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noscript
class Noscript extends UnattributedTag {
    constructor(children?: childrenType) {
        super("noscript", children);
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
	}, children?: childrenType): Noscript {
        var tag = new Noscript(children);
        tag.attrs(attri);
        return tag;
    }

    

}

export default Noscript;
    