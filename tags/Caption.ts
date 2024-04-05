
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption
class Caption extends Tag {
    constructor(children?: childrenType) {
        super("caption", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
        return this;
    }


    static withAttributes(attri: {
		"align"?: string,
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
	}, children?: childrenType): Caption {
        var tag = new Caption(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Caption;
    