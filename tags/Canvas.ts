
import Tag from "../utils/Tag";
import childrenType from "../childrenType";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas
class Canvas extends Tag {
    constructor(children?: childrenType) {
        super("canvas", children);
    }
    
    height(value?: string) {
        if(value) this.setAttr("height", value);
        return this;
    }

    width(value?: string) {
        if(value) this.setAttr("width", value);
        return this;
    }


    static withAttributes(attri: {
		"height"?: string,
		"width"?: string,
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
	}, children?: childrenType): Canvas {
        var tag = new Canvas(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Canvas;
    