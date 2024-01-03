
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
class Textarea extends Tag {
    constructor(children?: childrenType) {
        super("textarea", children);
    }
    
    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
    }

    cols(value?: string) {
        if(value) this.setAttr("cols", value);
    }

    dirname(value?: string) {
        if(value) this.setAttr("dirname", value);
    }

    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    enterkeyhint(value?: string) {
        if(value) this.setAttr("enterkeyhint", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    inputmode(value?: string) {
        if(value) this.setAttr("inputmode", value);
    }

    maxlength(value?: string) {
        if(value) this.setAttr("maxlength", value);
    }

    minlength(value?: string) {
        if(value) this.setAttr("minlength", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    placeholder(value?: string) {
        if(value) this.setAttr("placeholder", value);
    }

    readonly(value?: string) {
        if(value) this.setAttr("readonly", value);
    }

    required(value?: string) {
        if(value) this.setAttr("required", value);
    }

    rows(value?: string) {
        if(value) this.setAttr("rows", value);
    }

    wrap(value?: string) {
        if(value) this.setAttr("wrap", value);
    }


    static withAttributes(attri:{
		"autocomplete"?: string,
		"cols"?: string,
		"dirname"?: string,
		"disabled"?: string,
		"enterkeyhint"?: string,
		"form"?: string,
		"inputmode"?: string,
		"maxlength"?: string,
		"minlength"?: string,
		"name"?: string,
		"placeholder"?: string,
		"readonly"?: string,
		"required"?: string,
		"rows"?: string,
		"wrap"?: string,
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
	}, children?: childrenType): Textarea {
        var tag = new Textarea(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Textarea;
    