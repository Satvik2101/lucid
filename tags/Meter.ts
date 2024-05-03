import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
class Meter extends Tag {
    constructor(children?: childrenType) {
        super("meter", children);
    }
    
    form(value?: string) {
        this.setAttr("form", value);
        return this;
    }
    high(value?: string) {
        this.setAttr("high", value);
        return this;
    }
    low(value?: string) {
        this.setAttr("low", value);
        return this;
    }
    max(value?: string) {
        this.setAttr("max", value);
        return this;
    }
    min(value?: string) {
        this.setAttr("min", value);
        return this;
    }
    optimum(value?: string) {
        this.setAttr("optimum", value);
        return this;
    }
    value(value?: string) {
        this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri: {
		"form"?: string,
		"high"?: string,
		"low"?: string,
		"max"?: string,
		"min"?: string,
		"optimum"?: string,
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
	}, children?: childrenType): Meter {
            var tag = new Meter(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Meter;