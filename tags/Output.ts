
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output
class Output extends Tag {
    constructor(children?: childrenType) {
        super("output", children);
    }
    
    for(value?: string) {
        if(value) this.setAttr("for", value);
        return this;
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
        return this;
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
        return this;
    }


    static withAttributes(attri: {
		"for"?: string,
		"form"?: string,
		"name"?: string,
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
	}, children?: childrenType): Output {
        var tag = new Output(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Output;
    