
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio
class Audio extends Tag {
    constructor(children?: childrenType) {
        super("audio", children);
    }
    
    autoplay(value?: string) {
        if(value) this.setAttr("autoplay", value);
    }

    buffered(value?: string) {
        if(value) this.setAttr("buffered", value);
    }

    controls(value?: string) {
        if(value) this.setAttr("controls", value);
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    loop(value?: string) {
        if(value) this.setAttr("loop", value);
    }

    muted(value?: string) {
        if(value) this.setAttr("muted", value);
    }

    preload(value?: string) {
        if(value) this.setAttr("preload", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }


    static withAttributes(attri:{
		autoplay?: string,
		buffered?: string,
		controls?: string,
		crossorigin?: string,
		loop?: string,
		muted?: string,
		preload?: string,
		src?: string,
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
	}, children?: childrenType): Audio {
        var tag = new Audio(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Audio;
    