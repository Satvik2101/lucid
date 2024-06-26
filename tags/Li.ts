import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li
class Li extends Tag {
    constructor(children?: childrenType) {
        super("li", children);
    }
    
    value(value?: string) {
        this.setAttr("value", value);
        return this;
    }
    static withAttributes(attri: {
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
	}, children?: childrenType): Li {
            var tag = new Li(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Li;