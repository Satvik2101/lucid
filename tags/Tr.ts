import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tr
class Tr extends Tag {
    constructor(children?: childrenType) {
        super("tr", children);
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
	}, children?: childrenType): Tr {
        var tag = new Tr(children);
        tag.attrs(attri);
        return tag;
    }
}

export default Tr;