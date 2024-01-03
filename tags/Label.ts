
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
class Label extends Tag {
    constructor(children?: childrenType) {
        super("label", children);
    }
    
    for(value?: string) {
        if(value) this.setAttr("for", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }


    static withAttributes(attri:{
		for?: string,
		form?: string,
		accesskey?: string,
		autocapitalize?: string,
		class?: string,
		contenteditable?: string,
		contextmenu?: string,
		dir?: string,
		draggable?: string,
		hidden?: string,
		id?: string,
		itemprop?: string,
		lang?: string,
		role?: string,
		slot?: string,
		spellcheck?: string,
		style?: string,
		tabindex?: string,
		title?: string,
		translate?: string,
		[key: string]: any
	}, children?: childrenType): Label {
        var tag = new Label(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Label;
    