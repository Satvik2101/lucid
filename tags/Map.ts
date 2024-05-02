import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
class Map extends Tag {
    constructor(children?: childrenType) {
        super("map", children);
    }
    
    name(value?: string) {
        if (value) this.setAttr("name", value);
        return this;
    }
    static withAttributes(attri: {
		"name"?: string,
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
	}, children?: childrenType): Map {
            var tag = new Map(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Map;