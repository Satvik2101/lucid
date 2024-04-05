
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
class Select extends Tag {
    constructor(children?: childrenType) {
        super("select", children);
    }
    
    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
        return this;
    }

    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
        return this;
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
        return this;
    }

    multiple(value?: string) {
        if(value) this.setAttr("multiple", value);
        return this;
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
        return this;
    }

    required(value?: string) {
        if(value) this.setAttr("required", value);
        return this;
    }

    size(value?: string) {
        if(value) this.setAttr("size", value);
        return this;
    }


    static withAttributes(attri: {
		"autocomplete"?: string,
		"disabled"?: string,
		"form"?: string,
		"multiple"?: string,
		"name"?: string,
		"required"?: string,
		"size"?: string,
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
	}, children?: childrenType): Select {
        var tag = new Select(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Select;
    