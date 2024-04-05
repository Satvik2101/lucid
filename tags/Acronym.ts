
import UnattributedTag from "../utils/UnattributedTag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/acronym
class Acronym extends UnattributedTag {
    constructor(children?: childrenType) {
        super("acronym", children);
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
	}, children?: childrenType): Acronym {
        var tag = new Acronym(children);
        tag.attrs(attri);
        return tag;
    }

    

}

export default Acronym;
    