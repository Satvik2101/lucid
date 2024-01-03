
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track
class Track extends VoidTag {
    constructor() {
        super("track");
    }

    
    default(value?: string) {
        if(value) this.setAttr("default", value);
    }

    kind(value?: string) {
        if(value) this.setAttr("kind", value);
    }

    label(value?: string) {
        if(value) this.setAttr("label", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    srclang(value?: string) {
        if(value) this.setAttr("srclang", value);
    }



    static withAttributes(attri:{
		default?: string,
		kind?: string,
		label?: string,
		src?: string,
		srclang?: string,
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
	}): Track {
        var tag = new Track;
        tag.attrs(attri);
        return tag;
    }

        
}
    
export default Track;