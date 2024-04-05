
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/object
class ObjectTag extends Tag {
    constructor(children?: childrenType) {
        super("object", children);
    }
    
    border(value?: string) {
        if(value) this.setAttr("border", value);
        return this;
    }

    data(value?: string) {
        if(value) this.setAttr("data", value);
        return this;
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
        return this;
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
        return this;
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
        return this;
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
        return this;
    }

    usemap(value?: string) {
        if(value) this.setAttr("usemap", value);
        return this;
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
        return this;
    }


    static withAttributes(attri: {
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
	}, children?: childrenType): ObjectTag {
        var tag = new ObjectTag(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default ObjectTag;
    