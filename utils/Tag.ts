import childrenType from "../childrenType";
class Tag {
    tagName: string;
    attributes: {
        [key: string]: any
    };
    children: childrenType

    constructor(tagName: string, children?: childrenType, attributes?: { [key: string]: any }) {
        this.tagName = tagName;
        this.attributes = attributes ?? {};
        this.children = children || "";
    }

    static from(tag: Tag) {
        return new Tag(tag.tagName, tag.children, tag.attributes);
    }


    // Getters and Setters

    setName(name: string) {
        this.tagName = name;
        return this;
    }

    getName() {
        return this.tagName;
    }

    setAttr(key: string, value?: any) {
        this.attributes[key] = value;
        if (value == undefined || null) this.attributes[key] = "";
        return this;

    }

    getAttr(key: string) {
        return this.attributes[key];
    }


    //sets the children array
    populate(children: childrenType) {
        this.children = children;
        return this;

    }

    //shorthand for populate
    p(children: childrenType) {
        return this.populate(children);
    }

    attrs(attributes: { [key: string]: any }) {
        this.attributes = attributes;
        return this;

    }

    // Setters for global attributes
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    // The values for these are NOT validated.
    class(value?: string) {
        this.setAttr("class", value);
        return this;

    }

    id(value?: string) {
        this.setAttr("id", value);
        return this;

    }

    style(value?: string) {
        this.setAttr("style", value);
        return this;

    }

    on(event?: string, handler?: string) {
        if (event) this.setAttr(`on${event}`, handler ?? "");
        return this;
    }

    accesskey(value?: string) {
        this.setAttr("accesskey", value);
        return this;
    }

    autocapitalize(value?: string) {
        this.setAttr("autocapitalize", value);
        return this;
    }

    autofocus(value?: string) {
        this.setAttr("autofocus", value);
        return this;
    }

    contenteditable(value?: string) {
        this.setAttr("contenteditable", value);
        return this;
    }

    dir(value?: string) {
        this.setAttr("dir", value);
        return this;
    }

    draggable(value?: string) {
        this.setAttr("draggable", value);
        return this;
    }

    enterkeyhint(value?: string) {
        this.setAttr("enterkeyhint", value);
        return this;
    }

    exportparts(value?: string) {
        this.setAttr("exportparts", value);
        return this;
    }

    hidden(value?: string) {
        this.setAttr("hidden", value);
        return this;
    }

    inert(value?: string) {
        this.setAttr("inert", value);
        return this;
    }

    inputmode(value?: string) {
        this.setAttr("inputmode", value);
        return this;
    }

    is(value?: string) {
        this.setAttr("is", value);
        return this;
    }

    //WHATWG HTML Microdata feature attributes have been skipped.

    lang(value?: string) {
        this.setAttr("lang", value);
        return this;
    }

    nonce(value?: string) {
        this.setAttr("nonce", value);
        return this;
    }

    part(value?: string) {
        this.setAttr("part", value);
        return this;
    }

    popover(value?: string) {
        this.setAttr("popover", value);
        return this;
    }

    role(value?: string) {
        this.setAttr("role", value);
        return this;
    }

    slot(value?: string) {
        this.setAttr("slot", value);
        return this;
    }

    spellcheck(value?: string) {
        this.setAttr("spellcheck", value);
        return this;
    }

    tabindex(value?: string) {
        this.setAttr("tabindex", value);
        return this;
    }

    title(value?: string) {
        this.setAttr("title", value);
        return this;
    }

    translate(value?: string) {
        this.setAttr("translate", value);
        return this;
    }


    // Methods

    attributeString() {
        var attributeString = "";
        for (var attribute in this.attributes) {
            let value = this.attributes[attribute];
            if (value == undefined || null) value = "";
            attributeString += `${attribute}="${value}" `;
        }
        //remove last space and return
        return attributeString.trim();
    }
    getStart(): string {
        if (this.attributeString() == "") return `<${this.tagName}>`;
        return `<${this.tagName} ${this.attributeString()}>`;

    }

    body(): string {
        if (this.children == undefined) return "";
        if (typeof this.children == "string") return this.children;
        if (this.children instanceof Tag) return this.children.toString();
        return this.children.map((child) => child.toString()).join("");
    }

    getEnd(): string {
        return `</${this.tagName}>`
    }

    toString(): string {
        return this.getStart() + this.body() + this.getEnd();

    }
}

export default Tag;
