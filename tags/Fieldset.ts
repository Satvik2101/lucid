
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/fieldset
class Fieldset extends Tag {
    constructor(children?: childrenType) {
        super("fieldset", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    name(value?: string) {
        if(value) this.setAttr("name", value);
    }


    static withAttributes(attri:{
		disabled?: string,
		form?: string,
		name?: string,
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
	}, children?: childrenType): Fieldset {
        var tag = new Fieldset(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Fieldset;
    