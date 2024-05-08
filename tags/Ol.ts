import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol
class Ol extends Tag {
    constructor(children?: childrenType) {
        super("ol", children);
    }
    
    reversed(value?: string) {
        this.setAttr("reversed", value);
        return this;
    }
    start(value?: string) {
        this.setAttr("start", value);
        return this;
    }
    type(value?: string) {
        this.setAttr("type", value);
        return this;
    }
    static withAttributes(attri: {
		"reversed"?: string,
		"start"?: string,
		"type"?: string,
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
	}, children?: childrenType): Ol {
            var tag = new Ol(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Ol;