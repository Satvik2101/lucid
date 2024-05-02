import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
class Th extends Tag {
    constructor(children?: childrenType) {
        super("th", children);
    }
    
    align(value?: string) {
        if (value) this.setAttr("align", value);
        return this;
    }
    background(value?: string) {
        if (value) this.setAttr("background", value);
        return this;
    }
    bgcolor(value?: string) {
        if (value) this.setAttr("bgcolor", value);
        return this;
    }
    colspan(value?: string) {
        if (value) this.setAttr("colspan", value);
        return this;
    }
    headers(value?: string) {
        if (value) this.setAttr("headers", value);
        return this;
    }
    rowspan(value?: string) {
        if (value) this.setAttr("rowspan", value);
        return this;
    }
    scope(value?: string) {
        if (value) this.setAttr("scope", value);
        return this;
    }
    static withAttributes(attri: {
		"align"?: string,
		"background"?: string,
		"bgcolor"?: string,
		"colspan"?: string,
		"headers"?: string,
		"rowspan"?: string,
		"scope"?: string,
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
	}, children?: childrenType): Th {
        var tag = new Th(children);
        tag.attrs(attri);
        return tag;
    }
}

export default Th;