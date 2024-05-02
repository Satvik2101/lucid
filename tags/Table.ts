import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table
class Table extends Tag {
    constructor(children?: childrenType) {
        super("table", children);
    }
    
    align(value?: string) {
        if (value) this.setAttr("align", value);
        return this;
    }
    background(value?: string) {
        if (value) this.setAttr("background", value);
        return this;
    }
    bgcolor(value?: string) {
        if (value) this.setAttr("bgcolor", value);
        return this;
    }
    border(value?: string) {
        if (value) this.setAttr("border", value);
        return this;
    }
    summary(value?: string) {
        if (value) this.setAttr("summary", value);
        return this;
    }
    static withAttributes(attri: {
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