
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/nobr
class Nobr extends UnattributedTag {
    constructor(children?: childrenType) {
        super("nobr", children);
    }


    static withAttributes(attri:{
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
	}, children?: childrenType): Nobr {
        var tag = new Nobr(children);
        tag.attrs(attri);
        return tag;
    }

    

}

export default Nobr;
    