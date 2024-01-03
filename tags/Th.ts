
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/th
class Th extends Tag {
    constructor(children?: childrenType) {
        super("th", children);
    }
    
    align(value?: string) {
        if(value) this.setAttr("align", value);
    }

    background(value?: string) {
        if(value) this.setAttr("background", value);
    }

    bgcolor(value?: string) {
        if(value) this.setAttr("bgcolor", value);
    }

    colspan(value?: string) {
        if(value) this.setAttr("colspan", value);
    }

    headers(value?: string) {
        if(value) this.setAttr("headers", value);
    }

    rowspan(value?: string) {
        if(value) this.setAttr("rowspan", value);
    }

    scope(value?: string) {
        if(value) this.setAttr("scope", value);
    }


    static withAttributes(attri:{
		align?: string,
		background?: string,
		bgcolor?: string,
		colspan?: string,
		headers?: string,
		rowspan?: string,
		scope?: string,
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
	}, children?: childrenType): Th {
        var tag = new Th(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Th;
    