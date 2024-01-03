
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script
class Script extends Tag {
    constructor(children?: childrenType) {
        super("script", children);
    }
    
    async(value?: string) {
        if(value) this.setAttr("async", value);
    }

    crossorigin(value?: string) {
        if(value) this.setAttr("crossorigin", value);
    }

    defer(value?: string) {
        if(value) this.setAttr("defer", value);
    }

    integrity(value?: string) {
        if(value) this.setAttr("integrity", value);
    }

    language(value?: string) {
        if(value) this.setAttr("language", value);
    }

    referrerpolicy(value?: string) {
        if(value) this.setAttr("referrerpolicy", value);
    }

    src(value?: string) {
        if(value) this.setAttr("src", value);
    }

    type(value?: string) {
        if(value) this.setAttr("type", value);
    }


    static withAttributes(attri:{
		async?: string,
		crossorigin?: string,
		defer?: string,
		integrity?: string,
		language?: string,
		referrerpolicy?: string,
		src?: string,
		type?: string,
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
	}, children?: childrenType): Script {
        var tag = new Script(children);
        tag.attrs(attri);
        return tag;
    }

    


}



export default Script;
    