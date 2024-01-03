
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
class A extends Tag {
    constructor(children?: childrenType) {
        super("a", children);
    }
    
    download(value?: string) {
        if(value) this.setAttr("download", value);
    }

    href(value?: string) {
        if(value) this.setAttr("href", value);
    }

    hreflang(value?: string) {
        if(value) this.setAttr("hreflang", value);
    }

    media(value?: string) {
        if(value) this.setAttr("media", value);
    }

    ping(value?: string) {
        if(value) this.setAttr("ping", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    rel(value?: string) {
        if(value) this.setAttr("rel", value);
    }

    shape(value?: string) {
        if(value) this.setAttr("shape", value);
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
    }


    static withAttributes(attri:{
		"download"?: string,
		"href"?: string,
		"hreflang"?: string,
		"media"?: string,
		"ping"?: string,
		"referrerpolicy"?: string,
		"rel"?: string,
		"shape"?: string,
		"target"?: string,
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
	}, children?: childrenType): A {
        var tag = new A(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default A;
    