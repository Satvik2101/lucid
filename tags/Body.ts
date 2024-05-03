import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body
class Body extends Tag {
    constructor(children?: childrenType) {
        super("body", children);
    }
    
    background(value?: string) {
        this.setAttr("background", value);
        return this;
    }
    bgcolor(value?: string) {
        this.setAttr("bgcolor", value);
        return this;
    }
    static withAttributes(attri: {
		"background"?: string,
		"bgcolor"?: string,
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
	}, children?: childrenType): Body {
            var tag = new Body(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Body;