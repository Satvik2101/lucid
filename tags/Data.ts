
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/data
class Data extends Tag {
    constructor(children?: childrenType) {
        super("data", children);
    }
    
    value(value?: string) {
        if(value) this.setAttr("value", value);
        return this;
    }


    static withAttributes(attri: {
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
	}, children?: childrenType): Data {
        var tag = new Data(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Data;
    