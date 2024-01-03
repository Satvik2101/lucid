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

    // Getters and Setters

    setName(name: string) {
        this.tagName = name;
    }

    getName() {
        return this.tagName;
    }

    setAttr(key: string, value?: any) {
        this.attributes[key] = value;
    }

    getAttr(key: string) {
        return this.attributes[key];
    }

    setChildren(children: childrenType) {
        this.children = children;
    }

    attrs(attributes: { [key: string]: any }) {
        this.attributes = attributes;
    }

    // Setters for global attributes
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    // The values for these are NOT validated.
    class(value?: string) {
        if (value) this.setAttr("class", value);
    }

    id(value?: string) {
        if (value) this.setAttr("id", value);
    }

    style(value?: string) {
        if (value) this.setAttr("style", value);
    }

    on(event?: string, handler?: string) {
        if (event) this.setAttr(`on${event}`, handler ?? "");
    }

    accesskey(value?: string) {
        if (value) this.setAttr("accesskey", value);
    }

    autocapitalize(value?: string) {
        if (value) this.setAttr("autocapitalize", value);
    }

    autofocus(value?: string) {
        if (value) this.setAttr("autofocus", value);
    }

    contenteditable(value?: string) {
        if (value) this.setAttr("contenteditable", value);
    }

    dir(value?: string) {
        if (value) this.setAttr("dir", value);
    }

    draggable(value?: string) {
        if (value) this.setAttr("draggable", value);
    }

    enterkeyhint(value?: string) {
        if (value) this.setAttr("enterkeyhint", value);
    }

    exportparts(value?: string) {
        if (value) this.setAttr("exportparts", value);
    }

    hidden(value?: string) {
        if (value) this.setAttr("hidden", value);
    }

    inert(value?: string) {
        if (value) this.setAttr("inert", value);
    }

    inputmode(value?: string) {
        if (value) this.setAttr("inputmode", value);
    }

    is(value?: string) {
        if (value) this.setAttr("is", value);
    }

    //WHATWG HTML Microdata feature attributes have been skipped.

    lang(value?: string) {
        if (value) this.setAttr("lang", value);
    }

    nonce(value?: string) {
        if (value) this.setAttr("nonce", value);
    }

    part(value?: string) {
        if (value) this.setAttr("part", value);
    }

    popover(value?: string) {
        if (value) this.setAttr("popover", value);
    }

    role(value?: string) {
        if (value) this.setAttr("role", value);
    }

    slot(value?: string) {
        if (value) this.setAttr("slot", value);
    }

    spellcheck(value?: string) {
        if (value) this.setAttr("spellcheck", value);
    }

    tabindex(value?: string) {
        if (value) this.setAttr("tabindex", value);
    }

    title(value?: string) {
        if (value) this.setAttr("title", value);
    }

    translate(value?: string) {
        if (value) this.setAttr("translate", value);
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
    start(): string {
        return `<${this.tagName} ${this.attributeString()}>`

    }

    body(): string {
        if (this.children == undefined) return "";
        if (typeof this.children == "string") return this.children;
        if (this.children instanceof Tag) return this.children.toString();
        return this.children.map((child) => child.toString()).join("\n");
    }

    end(): string {
        return `</${this.tagName}>`
    }

    toString(): string {
        return this.start() + this.body() + this.end();

    }
}

class VoidTag extends Tag {
    constructor(tagName: string, attributes?: { [key: string]: any }) {
        super(tagName, [], attributes);
    }
    start(): string {
        return `<${this.tagName} ${this.attributeString()}>`
    }

    end(): string {
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