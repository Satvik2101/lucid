type childrenType = (string | Tag)[] | string | Tag | undefined;

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
        if (value) this.setAttr("class", value);
        return this;

    }

    id(value?: string) {
        if (value) this.setAttr("id", value);
        return this;

    }

    style(value?: string) {
        if (value) this.setAttr("style", value);
        return this;

    }

    on(event?: string, handler?: string) {
        if (event) this.setAttr(`on${event}`, handler ?? "");
        return this;
    }

    accesskey(value?: string) {
        if (value) this.setAttr("accesskey", value);
        return this;
    }

    autocapitalize(value?: string) {
        if (value) this.setAttr("autocapitalize", value);
        return this;
    }

    autofocus(value?: string) {
        if (value) this.setAttr("autofocus", value);
        return this;
    }

    contenteditable(value?: string) {
        if (value) this.setAttr("contenteditable", value);
        return this;
    }

    dir(value?: string) {
        if (value) this.setAttr("dir", value);
        return this;
    }

    draggable(value?: string) {
        if (value) this.setAttr("draggable", value);
        return this;
    }

    enterkeyhint(value?: string) {
        if (value) this.setAttr("enterkeyhint", value);
        return this;
    }

    exportparts(value?: string) {
        if (value) this.setAttr("exportparts", value);
        return this;
    }

    hidden(value?: string) {
        if (value) this.setAttr("hidden", value);
        return this;
    }

    inert(value?: string) {
        if (value) this.setAttr("inert", value);
        return this;
    }

    inputmode(value?: string) {
        if (value) this.setAttr("inputmode", value);
        return this;
    }

    is(value?: string) {
        if (value) this.setAttr("is", value);
        return this;
    }

    //WHATWG HTML Microdata feature attributes have been skipped.

    lang(value?: string) {
        if (value) this.setAttr("lang", value);
        return this;
    }

    nonce(value?: string) {
        if (value) this.setAttr("nonce", value);
        return this;
    }

    part(value?: string) {
        if (value) this.setAttr("part", value);
        return this;
    }

    popover(value?: string) {
        if (value) this.setAttr("popover", value);
        return this;
    }

    role(value?: string) {
        if (value) this.setAttr("role", value);
        return this;
    }

    slot(value?: string) {
        if (value) this.setAttr("slot", value);
        return this;
    }

    spellcheck(value?: string) {
        if (value) this.setAttr("spellcheck", value);
        return this;
    }

    tabindex(value?: string) {
        if (value) this.setAttr("tabindex", value);
        return this;
    }

    title(value?: string) {
        if (value) this.setAttr("title", value);
        return this;
    }

    translate(value?: string) {
        if (value) this.setAttr("translate", value);
        return this;
    }


    // Methods

    attributeString() {
        var attributeString = "";
        for (var attribute in this.attributes) {
            const value = this.attributes[attribute];
            if (value == undefined || null) continue;
            attributeString += `${attribute}="${value}" `;
        }
        return attributeString;
    }
    getStart(): string {
        return `<${this.tagName} ${this.attributeString()}>`

    }

    body(): string {
        if (this.children == undefined) return "";
        if (typeof this.children == "string") return this.children;
        if (this.children instanceof Tag) return this.children.toString();
        return this.children.map((child) => child.toString()).join("\n");
    }

    getEnd(): string {
        return `</${this.tagName}>`
    }

    toString(): string {
        return this.getStart() + this.body() + this.getEnd();

    }
}

class VoidTag extends Tag {
    constructor(tagName: string, attributes?: { [key: string]: any }) {
        super(tagName, [], attributes);
    }
    getStart(): string {
        return `<${this.tagName} ${this.attributeString()}>`
    }

    getEnd(): string {
        return "";
    }

}



// class StylesheetTag extends LinkTag {
//     constructor(href: string) {

//         super("stylesheet", href)
//     }
// }


export { Tag, VoidTag, childrenType }
// export {Tag} ;