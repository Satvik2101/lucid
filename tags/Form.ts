
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
class Form extends Tag {
    constructor(children?: childrenType) {
        super("form", children);
    }
    
    accept(value?: string) {
        if(value) this.setAttr("accept", value);
    }

    accept_charset(value?: string) {
        if(value) this.setAttr("accept-charset", value);
    }

    action(value?: string) {
        if(value) this.setAttr("action", value);
    }

    autocomplete(value?: string) {
        if(value) this.setAttr("autocomplete", value);
    }

    enctype(value?: string) {
        if(value) this.setAttr("enctype", value);
    }

    method(value?: string) {
        if(value) this.setAttr("method", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    novalidate(value?: string) {
        if(value) this.setAttr("novalidate", value);
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
    }


    static withAttributes(attri:{
		accept?: string,
		accept-charset?: string,
		action?: string,
		autocomplete?: string,
		enctype?: string,
		method?: string,
		name?: string,
		novalidate?: string,
		target?: string,
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
	}, children?: childrenType): Form {
        var tag = new Form(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Form;
    