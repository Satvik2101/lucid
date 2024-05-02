import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
class Option extends Tag {
    constructor(children?: childrenType) {
        super("option", children);
    }
    
    disabled(value?: string) {
        if (value) this.setAttr("disabled", value);
        return this;
    }
    label(value?: string) {
        if (value) this.setAttr("label", value);
        return this;
    }
    selected(value?: string) {
        if (value) this.setAttr("selected", value);
        return this;
    }
    value(value?: string) {
        if (value) this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri: {
		"disabled"?: string,
		"label"?: string,
		"selected"?: string,
		"value"?: string,
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
	}, children?: childrenType): Option {
            var tag = new Option(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Option;