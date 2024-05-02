import VoidTag from "../utils/VoidTag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
class Input extends VoidTag {
    constructor() {
        super("input");
    }


    accept(value?: string) {
        if (value) this.setAttr("accept", value);
        return this;
    }
    alt(value?: string) {
        if (value) this.setAttr("alt", value);
        return this;
    }
    autocomplete(value?: string) {
        if (value) this.setAttr("autocomplete", value);
        return this;
    }
    capture(value?: string) {
        if (value) this.setAttr("capture", value);
        return this;
    }
    checked(value?: string) {
        if (value) this.setAttr("checked", value);
        return this;
    }
    dirname(value?: string) {
        if (value) this.setAttr("dirname", value);
        return this;
    }
    disabled(value?: string) {
        if (value) this.setAttr("disabled", value);
        return this;
    }
    form(value?: string) {
        if (value) this.setAttr("form", value);
        return this;
    }
    formaction(value?: string) {
        if (value) this.setAttr("formaction", value);
        return this;
    }
    formenctype(value?: string) {
        if (value) this.setAttr("formenctype", value);
        return this;
    }
    formmethod(value?: string) {
        if (value) this.setAttr("formmethod", value);
        return this;
    }
    formnovalidate(value?: string) {
        if (value) this.setAttr("formnovalidate", value);
        return this;
    }
    formtarget(value?: string) {
        if (value) this.setAttr("formtarget", value);
        return this;
    }
    height(value?: string) {
        if (value) this.setAttr("height", value);
        return this;
    }
    list(value?: string) {
        if (value) this.setAttr("list", value);
        return this;
    }
    max(value?: string) {
        if (value) this.setAttr("max", value);
        return this;
    }
    maxlength(value?: string) {
        if (value) this.setAttr("maxlength", value);
        return this;
    }
    minlength(value?: string) {
        if (value) this.setAttr("minlength", value);
        return this;
    }
    min(value?: string) {
        if (value) this.setAttr("min", value);
        return this;
    }
    multiple(value?: string) {
        if (value) this.setAttr("multiple", value);
        return this;
    }
    name(value?: string) {
        if (value) this.setAttr("name", value);
        return this;
    }
    pattern(value?: string) {
        if (value) this.setAttr("pattern", value);
        return this;
    }
    placeholder(value?: string) {
        if (value) this.setAttr("placeholder", value);
        return this;
    }
    readonly(value?: string) {
        if (value) this.setAttr("readonly", value);
        return this;
    }
    required(value?: string) {
        if (value) this.setAttr("required", value);
        return this;
    }
    size(value?: string) {
        if (value) this.setAttr("size", value);
        return this;
    }
    src(value?: string) {
        if (value) this.setAttr("src", value);
        return this;
    }
    step(value?: string) {
        if (value) this.setAttr("step", value);
        return this;
    }
    type(value?: string) {
        if (value) this.setAttr("type", value);
        return this;
    }
    usemap(value?: string) {
        if (value) this.setAttr("usemap", value);
        return this;
    }
    value(value?: string) {
        if (value) this.setAttr("value", value);
        return this;
    }
    width(value?: string) {
        if (value) this.setAttr("width", value);
        return this;
    }

    static withAttributes(attri: {
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