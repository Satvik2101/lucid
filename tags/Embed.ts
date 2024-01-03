
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/embed
class Embed extends VoidTag {
    constructor() {
        super("embed");
    }

    
    height(value?: string) {
        if(value) this.setAttr("height", value);
        return this;
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
        return this;
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
        return this;
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
        return this;
    }



    static withAttributes(attri: {
		"height"?: string,
		"src"?: string,
		"type"?: string,
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
	}): Embed {
        var tag = new Embed;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Embed;