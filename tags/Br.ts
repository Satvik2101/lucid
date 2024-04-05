
import VoidTag from "../utils/VoidTag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/br
class Br extends VoidTag {
    constructor() {
        super("br");
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
	}): Br {
        var tag = new Br;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Br;