import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/del
class Del extends Tag {
    constructor(children?: childrenType) {
        super("del", children);
    }
    
    cite(value?: string) {
        this.setAttr("cite", value);
        return this;
    }
    datetime(value?: string) {
        this.setAttr("datetime", value);
        return this;
    }
    static withAttributes(attri: {
		"cite"?: string,
		"datetime"?: string,
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
	}, children?: childrenType): Del {
            var tag = new Del(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Del;