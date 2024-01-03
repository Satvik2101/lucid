
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/base
class Base extends VoidTag {
    constructor() {
        super("base");
    }

    
    href(value?: string) {
        if(value) this.setAttr("href", value);
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
    }



    static withAttributes(attri:{
		"href"?: string,
		"target"?: string,
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
	}): Base {
        var tag = new Base;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Base;