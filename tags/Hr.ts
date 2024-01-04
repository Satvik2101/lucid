
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr
class Hr extends VoidTag {
    constructor() {
        super("hr");
    }

    
    align(value?: string) {
        if(value) this.setAttr("align", value);
        return this;
    }

    color(value?: string) {
        if(value) this.setAttr("color", value);
        return this;
    }



    static withAttributes(attri: {
		"align"?: string,
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
	}): Hr {
        var tag = new Hr;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Hr;