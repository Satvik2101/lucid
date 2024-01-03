
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/contenteditable
class Contenteditable extends Tag {
    constructor(children?: childrenType) {
        super("contenteditable", children);
    }
    
    enterkeyhint(value?: string) {
        if(value) this.setAttr("enterkeyhint", value);
    }

    inputmode(value?: string) {
        if(value) this.setAttr("inputmode", value);
    }


    static withAttributes(attri:{
		"enterkeyhint"?: string,
		"inputmode"?: string,
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
	}, children?: childrenType): Contenteditable {
        var tag = new Contenteditable(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Contenteditable;
    