import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/thead
class Thead extends Tag {
    constructor(children?: childrenType) {
        super("thead", children);
    }
    
    align(value?: string) {
        this.setAttr("align", value);
        return this;
    }
    static withAttributes(attri: {
		"align"?: string,
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
	}, children?: childrenType): Thead {
            var tag = new Thead(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Thead;