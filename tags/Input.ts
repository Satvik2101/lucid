import VoidTag from "../utils/VoidTag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
class Input extends VoidTag {
    constructor() {
                super("input");
            }
    
    accept(value?: string) {
        this.setAttr("accept", value);
        return this;
    }
    alt(value?: string) {
        this.setAttr("alt", value);
        return this;
    }
    autocomplete(value?: string) {
        this.setAttr("autocomplete", value);
        return this;
    }
    capture(value?: string) {
        this.setAttr("capture", value);
        return this;
    }
    checked(value?: string) {
        this.setAttr("checked", value);
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
    form(value?: string) {
        this.setAttr("form", value);
        return this;
    }
    formaction(value?: string) {
        this.setAttr("formaction", value);
        return this;
    }
    formenctype(value?: string) {
        this.setAttr("formenctype", value);
        return this;
    }
    formmethod(value?: string) {
        this.setAttr("formmethod", value);
        return this;
    }
    formnovalidate(value?: string) {
        this.setAttr("formnovalidate", value);
        return this;
    }
    formtarget(value?: string) {
        this.setAttr("formtarget", value);
        return this;
    }
    height(value?: string) {
        this.setAttr("height", value);
        return this;
    }
    list(value?: string) {
        this.setAttr("list", value);
        return this;
    }
    max(value?: string) {
        this.setAttr("max", value);
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
    min(value?: string) {
        this.setAttr("min", value);
        return this;
    }
    multiple(value?: string) {
        this.setAttr("multiple", value);
        return this;
    }
    name(value?: string) {
        this.setAttr("name", value);
        return this;
    }
    pattern(value?: string) {
        this.setAttr("pattern", value);
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
    size(value?: string) {
        this.setAttr("size", value);
        return this;
    }
    src(value?: string) {
        this.setAttr("src", value);
        return this;
    }
    step(value?: string) {
        this.setAttr("step", value);
        return this;
    }
    type(value?: string) {
        this.setAttr("type", value);
        return this;
    }
    usemap(value?: string) {
        this.setAttr("usemap", value);
        return this;
    }
    value(value?: string) {
        this.setAttr("value", value);
        return this;
    }
    width(value?: string) {
        this.setAttr("width", value);
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
                var tag = new Input();
                tag.attrs(attri);
                return tag;
            }
}
export default Input;