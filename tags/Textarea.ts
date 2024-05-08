import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea
class Textarea extends Tag {
    constructor(children?: childrenType) {
        super("textarea", children);
    }
    
    autocomplete(value?: string) {
        this.setAttr("autocomplete", value);
        return this;
    }
    cols(value?: string) {
        this.setAttr("cols", value);
        return this;
    }
    dirname(value?: string) {
        this.setAttr("dirname", value);
        return this;
    }
    disabled(value?: string) {
        this.setAttr("disabled", value);
        return this;
    }
    enterkeyhint(value?: string) {
        this.setAttr("enterkeyhint", value);
        return this;
    }
    form(value?: string) {
        this.setAttr("form", value);
        return this;
    }
    inputmode(value?: string) {
        this.setAttr("inputmode", value);
        return this;
    }
    maxlength(value?: string) {
        this.setAttr("maxlength", value);
        return this;
    }
    minlength(value?: string) {
        this.setAttr("minlength", value);
        return this;
    }
    name(value?: string) {
        this.setAttr("name", value);
        return this;
    }
    placeholder(value?: string) {
        this.setAttr("placeholder", value);
        return this;
    }
    readonly(value?: string) {
        this.setAttr("readonly", value);
        return this;
    }
    required(value?: string) {
        this.setAttr("required", value);
        return this;
    }
    rows(value?: string) {
        this.setAttr("rows", value);
        return this;
    }
    wrap(value?: string) {
        this.setAttr("wrap", value);
        return this;
    }
    static withAttributes(attri: {
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