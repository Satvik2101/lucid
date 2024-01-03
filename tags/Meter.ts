
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
class Meter extends Tag {
    constructor(children?: childrenType) {
        super("meter", children);
    }
    
    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    high(value?: string) {
        if(value) this.setAttr("high", value);
    }

    low(value?: string) {
        if(value) this.setAttr("low", value);
    }

    max(value?: string) {
        if(value) this.setAttr("max", value);
    }

    min(value?: string) {
        if(value) this.setAttr("min", value);
    }

    optimum(value?: string) {
        if(value) this.setAttr("optimum", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }


    static withAttributes(attri:{
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
    