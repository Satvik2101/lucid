import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote
class Blockquote extends Tag {
    constructor(children?: childrenType) {
        super("blockquote", children);
    }
    
    cite(value?: string) {
        this.setAttr("cite", value);
        return this;
    }
    static withAttributes(attri: {
		"cite"?: string,
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
	}, children?: childrenType): Blockquote {
            var tag = new Blockquote(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Blockquote;