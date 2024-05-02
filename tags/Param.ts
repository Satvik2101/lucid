import VoidTag from "../utils/VoidTag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
class Param extends VoidTag {
    constructor() {
        super("param");
    }


    name(value?: string) {
        if (value) this.setAttr("name", value);
        return this;
    }
    value(value?: string) {
        if (value) this.setAttr("value", value);
        return this;
    }

    static withAttributes(attri: {
		"name"?: string,
		"value"?: string,
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
	}): Param {
        var tag = new Param;
        tag.attrs(attri);
        return tag;
    }    
}
    
export default Param;