
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee
class Marquee extends Tag {
    constructor(children?: childrenType) {
        super("marquee", children);
    }
    
    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

    loop(value?: string) {
        if(value) this.setAttr("loop", value);
    }


    static withAttributes(attri:{
		"bgcolor"?: string,
		"loop"?: string,
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
	}, children?: childrenType): Marquee {
        var tag = new Marquee(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Marquee;
    