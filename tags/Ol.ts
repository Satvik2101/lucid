
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
class Ol extends Tag {
    constructor(children?: childrenType) {
        super("ol", children);
    }
    
    reversed(value?: string) {
        if(value) this.setAttr("reversed", value);
    }

    start(value?: string) {
        if(value) this.setAttr("start", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }


    static withAttributes(attri:{
		"reversed"?: string,
		"start"?: string,
		"type"?: string,
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
	}, children?: childrenType): Ol {
        var tag = new Ol(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Ol;
    