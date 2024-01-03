
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
class Input extends VoidTag {
    constructor() {
        super("input");
    }

    
    accept(value?: string) {
        if(value) this.setAttr("accept", value);
    }

    alt(value?: string) {
        if(value) this.setAttr("alt", value);
    }

    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
    }

    capture(value?: string) {
        if(value) this.setAttr("capture", value);
    }

    checked(value?: string) {
        if(value) this.setAttr("checked", value);
    }

    dirname(value?: string) {
        if(value) this.setAttr("dirname", value);
    }

    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    formaction(value?: string) {
        if(value) this.setAttr("formaction", value);
    }

    formenctype(value?: string) {
        if(value) this.setAttr("formenctype", value);
    }

    formmethod(value?: string) {
        if(value) this.setAttr("formmethod", value);
    }

    formnovalidate(value?: string) {
        if(value) this.setAttr("formnovalidate", value);
    }

    formtarget(value?: string) {
        if(value) this.setAttr("formtarget", value);
    }

    height(value?: string) {
        if(value) this.setAttr("height", value);
    }

    list(value?: string) {
        if(value) this.setAttr("list", value);
    }

    max(value?: string) {
        if(value) this.setAttr("max", value);
    }

    maxlength(value?: string) {
        if(value) this.setAttr("maxlength", value);
    }

    minlength(value?: string) {
        if(value) this.setAttr("minlength", value);
    }

    min(value?: string) {
        if(value) this.setAttr("min", value);
    }

    multiple(value?: string) {
        if(value) this.setAttr("multiple", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    pattern(value?: string) {
        if(value) this.setAttr("pattern", value);
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

    size(value?: string) {
        if(value) this.setAttr("size", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    step(value?: string) {
        if(value) this.setAttr("step", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

    usemap(value?: string) {
        if(value) this.setAttr("usemap", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
    }



    static withAttributes(attri:{
		"accept"?: string,
		"alt"?: string,
		"autocomplete"?: string,
		"capture"?: string,
		"checked"?: string,
		"dirname"?: string,
		"disabled"?: string,
		"form"?: string,
		"formaction"?: string,
		"formenctype"?: string,
		"formmethod"?: string,
		"formnovalidate"?: string,
		"formtarget"?: string,
		"height"?: string,
		"list"?: string,
		"max"?: string,
		"maxlength"?: string,
		"minlength"?: string,
		"min"?: string,
		"multiple"?: string,
		"name"?: string,
		"pattern"?: string,
		"placeholder"?: string,
		"readonly"?: string,
		"required"?: string,
		"size"?: string,
		"src"?: string,
		"step"?: string,
		"type"?: string,
		"usemap"?: string,
		"value"?: string,
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
	}): Input {
        var tag = new Input;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Input;