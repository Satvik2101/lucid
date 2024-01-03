
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
class Table extends Tag {
    constructor(children?: childrenType) {
        super("table", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    background(value?: string) {
        if(value) this.setAttr("background", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

    border(value?: string) {
        if(value) this.setAttr("border", value);
    }

    summary(value?: string) {
        if(value) this.setAttr("summary", value);
    }


    static withAttributes(attri:{
		"align"?: string,
		"background"?: string,
		"bgcolor"?: string,
		"border"?: string,
		"summary"?: string,
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
	}, children?: childrenType): Table {
        var tag = new Table(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Table;
    