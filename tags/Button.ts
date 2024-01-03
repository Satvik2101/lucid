
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button
class Button extends Tag {
    constructor(children?: childrenType) {
        super("button", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    formaction(value?: string) {
        if(value) this.setAttr("formaction", value);
    }

    formenctype(value?: string) {
        if(value) this.setAttr("formenctype", value);
    }

    formmethod(value?: string) {
        if(value) this.setAttr("formmethod", value);
    }

    formnovalidate(value?: string) {
        if(value) this.setAttr("formnovalidate", value);
    }

    formtarget(value?: string) {
        if(value) this.setAttr("formtarget", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }


    static withAttributes(attri:{
		disabled?: string,
		form?: string,
		formaction?: string,
		formenctype?: string,
		formmethod?: string,
		formnovalidate?: string,
		formtarget?: string,
		name?: string,
		type?: string,
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
	}, children?: childrenType): Button {
        var tag = new Button(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Button;
    