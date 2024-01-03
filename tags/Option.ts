
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
class Option extends Tag {
    constructor(children?: childrenType) {
        super("option", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    label(value?: string) {
        if(value) this.setAttr("label", value);
    }

    selected(value?: string) {
        if(value) this.setAttr("selected", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }


    static withAttributes(attri:{
		disabled?: string,
		label?: string,
		selected?: string,
		value?: string,
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
	}, children?: childrenType): Option {
        var tag = new Option(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Option;
    