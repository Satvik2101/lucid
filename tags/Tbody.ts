
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tbody
class Tbody extends Tag {
    constructor(children?: childrenType) {
        super("tbody", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
        return this;
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
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
	}, children?: childrenType): Tbody {
        var tag = new Tbody(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Tbody;
    