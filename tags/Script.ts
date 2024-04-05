
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
class Script extends Tag {
    constructor(children?: childrenType) {
        super("script", children);
    }
    
    async(value?: string) {
        if(value) this.setAttr("async", value);
        return this;
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
        return this;
    }

    defer(value?: string) {
        if(value) this.setAttr("defer", value);
        return this;
    }

    integrity(value?: string) {
        if(value) this.setAttr("integrity", value);
        return this;
    }

    language(value?: string) {
        if(value) this.setAttr("language", value);
        return this;
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
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


    static withAttributes(attri: {
		"async"?: string,
		"crossorigin"?: string,
		"defer"?: string,
		"integrity"?: string,
		"language"?: string,
		"referrerpolicy"?: string,
		"src"?: string,
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
	}, children?: childrenType): Script {
        var tag = new Script(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Script;
    