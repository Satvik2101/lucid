
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time
class Time extends Tag {
    constructor(children?: childrenType) {
        super("time", children);
    }
    
    datetime(value?: string) {
        if(value) this.setAttr("datetime", value);
        return this;
    }


    static withAttributes(attri: {
		"datetime"?: string,
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
	}, children?: childrenType): Time {
        var tag = new Time(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Time;
    