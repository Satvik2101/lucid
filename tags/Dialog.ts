
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
class Dialog extends Tag {
    constructor(children?: childrenType) {
        super("dialog", children);
    }
    
    open(value?: string) {
        if(value) this.setAttr("open", value);
    }


    static withAttributes(attri:{
		open?: string,
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
	}, children?: childrenType): Dialog {
        var tag = new Dialog(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Dialog;
    