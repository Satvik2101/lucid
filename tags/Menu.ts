
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
class Menu extends Tag {
    constructor(children?: childrenType) {
        super("menu", children);
    }
    
    type(value?: string) {
        if(value) this.setAttr("type", value);
        return this;
    }


    static withAttributes(attri: {
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
	}, children?: childrenType): Menu {
        var tag = new Menu(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Menu;
    