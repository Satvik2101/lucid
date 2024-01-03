
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/area
class Area extends VoidTag {
    constructor() {
        super("area");
    }

    
    alt(value?: string) {
        if(value) this.setAttr("alt", value);
    }

    coords(value?: string) {
        if(value) this.setAttr("coords", value);
    }

    download(value?: string) {
        if(value) this.setAttr("download", value);
    }

    href(value?: string) {
        if(value) this.setAttr("href", value);
    }

    media(value?: string) {
        if(value) this.setAttr("media", value);
    }

    ping(value?: string) {
        if(value) this.setAttr("ping", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    rel(value?: string) {
        if(value) this.setAttr("rel", value);
    }

    shape(value?: string) {
        if(value) this.setAttr("shape", value);
    }

    target(value?: string) {
        if(value) this.setAttr("target", value);
    }



    static withAttributes(attri:{
		alt?: string,
		coords?: string,
		download?: string,
		href?: string,
		media?: string,
		ping?: string,
		referrerpolicy?: string,
		rel?: string,
		shape?: string,
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
	}): Area {
        var tag = new Area;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Area;