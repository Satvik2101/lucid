
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a
class A extends Tag {
    constructor(children?: childrenType) {
        super("a", children);
    }
    
    download(value?: string) {
        if(value) this.setAttr("download", value);
        return this;
    }

    href(value?: string) {
        if(value) this.setAttr("href", value);
        return this;
    }

    hreflang(value?: string) {
        if(value) this.setAttr("hreflang", value);
        return this;
    }

    media(value?: string) {
        if(value) this.setAttr("media", value);
        return this;
    }

    ping(value?: string) {
        if(value) this.setAttr("ping", value);
        return this;
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
        return this;
    }

    rel(value?: string) {
        if(value) this.setAttr("rel", value);
        return this;
    }

    shape(value?: string) {
        if(value) this.setAttr("shape", value);
        return this;
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
        return this;
    }


    static withAttributes(attri: {
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
    