
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset
class Frameset extends UnattributedTag {
    constructor(children?: childrenType) {
        super("frameset", children);
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
	}, children?: childrenType): Frameset {
        var tag = new Frameset(children);
        tag.attrs(attri);
        return tag;
    }

    

}

export default Frameset;
    