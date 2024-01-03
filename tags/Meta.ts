
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta
class Meta extends VoidTag {
    constructor() {
        super("meta");
    }


    charset(value?: string) {
        if (value) this.setAttr("charset", value);
    }

    content(value?: string) {
        if (value) this.setAttr("content", value);
    }

    http_equiv(value?: string) {
        if (value) this.setAttr("http-equiv", value);
    }

    name(value?: string) {
        if (value) this.setAttr("name", value);
    }

    property(value?: string) {
        if (value) this.setAttr("property", value);
    }



    static withAttributes(attri: {
        "charset"?: string,
        "content"?: string,
        "http-equiv"?: string,
        "name"?: string,
        "property"?: string,
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
    }): Meta {
        var tag = new Meta;
        tag.attrs(attri);
        return tag;
    }

}

export default Meta;