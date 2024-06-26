import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress
class Progress extends Tag {
    constructor(children?: childrenType) {
        super("progress", children);
    }
    
    form(value?: string) {
        this.setAttr("form", value);
        return this;
    }
    max(value?: string) {
        this.setAttr("max", value);
        return this;
    }
    value(value?: string) {
        this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri: {
		"form"?: string,
		"max"?: string,
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
	}, children?: childrenType): Progress {
            var tag = new Progress(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Progress;