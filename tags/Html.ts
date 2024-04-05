
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html
class Html extends Tag {
    constructor(children?: childrenType) {
        super("html", children);
    }
    
    manifest(value?: string) {
        if(value) this.setAttr("manifest", value);
        return this;
    }


    static withAttributes(attri: {
		"manifest"?: string,
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
	}, children?: childrenType): Html {
        var tag = new Html(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Html;
    