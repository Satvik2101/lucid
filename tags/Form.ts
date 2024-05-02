import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
class Form extends Tag {
    constructor(children?: childrenType) {
        super("form", children);
    }
    
    accept(value?: string) {
        if (value) this.setAttr("accept", value);
        return this;
    }
    accept_charset(value?: string) {
        if (value) this.setAttr("accept-charset", value);
        return this;
    }
    action(value?: string) {
        if (value) this.setAttr("action", value);
        return this;
    }
    autocomplete(value?: string) {
        if (value) this.setAttr("autocomplete", value);
        return this;
    }
    enctype(value?: string) {
        if (value) this.setAttr("enctype", value);
        return this;
    }
    method(value?: string) {
        if (value) this.setAttr("method", value);
        return this;
    }
    name(value?: string) {
        if (value) this.setAttr("name", value);
        return this;
    }
    novalidate(value?: string) {
        if (value) this.setAttr("novalidate", value);
        return this;
    }
    target(value?: string) {
        if (value) this.setAttr("target", value);
        return this;
    }
    static withAttributes(attri: {
		"accept"?: string,
		"accept-charset"?: string,
		"action"?: string,
		"autocomplete"?: string,
		"enctype"?: string,
		"method"?: string,
		"name"?: string,
		"novalidate"?: string,
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
	}, children?: childrenType): Form {
        var tag = new Form(children);
        tag.attrs(attri);
        return tag;
    }
}

export default Form;