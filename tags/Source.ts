
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source
class Source extends VoidTag {
    constructor() {
        super("source");
    }

    
    media(value?: string) {
        if(value) this.setAttr("media", value);
        return this;
    }

    sizes(value?: string) {
        if(value) this.setAttr("sizes", value);
        return this;
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
        return this;
    }

    srcset(value?: string) {
        if(value) this.setAttr("srcset", value);
        return this;
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
        return this;
    }



    static withAttributes(attri: {
		"media"?: string,
		"sizes"?: string,
		"src"?: string,
		"srcset"?: string,
		"type"?: string,
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
	}): Source {
        var tag = new Source;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Source;