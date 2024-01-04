
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/col
class Col extends VoidTag {
    constructor() {
        super("col");
    }

    
    align(value?: string) {
        if(value) this.setAttr("align", value);
        return this;
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
        return this;
    }

    span(value?: string) {
        if(value) this.setAttr("span", value);
        return this;
    }



    static withAttributes(attri: {
		"align"?: string,
		"bgcolor"?: string,
		"span"?: string,
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
	}): Col {
        var tag = new Col;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Col;