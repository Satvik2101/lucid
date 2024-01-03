
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
class Object extends Tag {
    constructor(children?: childrenType) {
        super("object", children);
    }
    
    border(value?: string) {
        if(value) this.setAttr("border", value);
    }

    data(value?: string) {
        if(value) this.setAttr("data", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

    usemap(value?: string) {
        if(value) this.setAttr("usemap", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }


    static withAttributes(attri:{
		"border"?: string,
		"data"?: string,
		"form"?: string,
		"height"?: string,
		"name"?: string,
		"type"?: string,
		"usemap"?: string,
		"width"?: string,
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
	}, children?: childrenType): Object {
        var tag = new Object(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Object;
    