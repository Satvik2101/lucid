
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/optgroup
class Optgroup extends Tag {
    constructor(children?: childrenType) {
        super("optgroup", children);
    }
    
    disabled(value?: string) {
        if(value) this.setAttr("disabled", value);
    }

    label(value?: string) {
        if(value) this.setAttr("label", value);
    }


    static withAttributes(attri:{
		disabled?: string,
		label?: string,
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
	}, children?: childrenType): Optgroup {
        var tag = new Optgroup(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Optgroup;
    