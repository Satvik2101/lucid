import Tag from "../utils/Tag";
import childrenType from "../childrenType";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
class Iframe extends Tag {
    constructor(children?: childrenType) {
        super("iframe", children);
    }
    
    align(value?: string) {
        if (value) this.setAttr("align", value);
        return this;
    }
    allow(value?: string) {
        if (value) this.setAttr("allow", value);
        return this;
    }
    csp(value?: string) {
        if (value) this.setAttr("csp", value);
        return this;
    }
    height(value?: string) {
        if (value) this.setAttr("height", value);
        return this;
    }
    loading(value?: string) {
        if (value) this.setAttr("loading", value);
        return this;
    }
    name(value?: string) {
        if (value) this.setAttr("name", value);
        return this;
    }
    referrerpolicy(value?: string) {
        if (value) this.setAttr("referrerpolicy", value);
        return this;
    }
    sandbox(value?: string) {
        if (value) this.setAttr("sandbox", value);
        return this;
    }
    src(value?: string) {
        if (value) this.setAttr("src", value);
        return this;
    }
    srcdoc(value?: string) {
        if (value) this.setAttr("srcdoc", value);
        return this;
    }
    width(value?: string) {
        if (value) this.setAttr("width", value);
        return this;
    }
    static withAttributes(attri: {
		"align"?: string,
		"allow"?: string,
		"csp"?: string,
		"height"?: string,
		"loading"?: string,
		"name"?: string,
		"referrerpolicy"?: string,
		"sandbox"?: string,
		"src"?: string,
		"srcdoc"?: string,
		"width"?: string,
		"accesskey"?: string,
		"autocapitalize"?: string,
		"class"?: string,
		"contenteditable"?: string,
		"contextmenu"?: string,
		"dir"?: string,
		"draggable"?: string,
		"hidden"?: string,
		"id"?: string,
		"itemprop"?: string,
		"lang"?: string,
		"role"?: string,
		"slot"?: string,
		"spellcheck"?: string,
		"style"?: string,
		"tabindex"?: string,
		"title"?: string,
		"translate"?: string,
		[key: string]: any
	}, children?: childrenType): Iframe {
            var tag = new Iframe(children);
            tag.attrs(attri);
            return tag;
        }
}
export default Iframe;