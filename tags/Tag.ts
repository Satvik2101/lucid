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
    setAttr(key: string, value: any) {
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
    class(value: string) {
        this.setAttr("class", value);
    }

    id(value: string) {
        this.setAttr("id", value);
    }

    style(value: string) {
        this.setAttr("style", value);
    }

    on(event: string, handler: string) {
        this.setAttr(`on${event}`, handler);
    }

    accesskey(value: string) {
        this.setAttr("accesskey", value);
    }

    autocapitalize(value: string) {
        this.setAttr("autocapitalize", value);
    }

    autofocus(value: string) {
        this.setAttr("autofocus", value);
    }

    contenteditable(value: string) {
        this.setAttr("contenteditable", value);
    }

    dir(value: string) {
        this.setAttr("dir", value);
    }

    draggable(value: string) {
        this.setAttr("draggable", value);
    }

    enterkeyhint(value: string) {
        this.setAttr("enterkeyhint", value);
    }

    exportparts(value: string) {
        this.setAttr("exportparts", value);
    }

    hidden(value: string) {
        this.setAttr("hidden", value);
    }

    inert(value: string) {
        this.setAttr("inert", value);
    }

    inputmode(value: string) {
        this.setAttr("inputmode", value);
    }

    is(value: string) {
        this.setAttr("is", value);
    }

    //WHATWG HTML Microdata feature attributes have been skipped.

    lang(value: string) {
        this.setAttr("lang", value);
    }

    nonce(value: string) {
        this.setAttr("nonce", value);
    }

    part(value: string) {
        this.setAttr("part", value);
    }

    popover(value: string) {
        this.setAttr("popover", value);
    }

    role(value: string) {
        this.setAttr("role", value);
    }

    slot(value: string) {
        this.setAttr("slot", value);
    }

    spellcheck(value: string) {
        this.setAttr("spellcheck", value);
    }

    tabindex(value: string) {
        this.setAttr("tabindex", value);
    }

    title(value: string) {
        this.setAttr("title", value);
    }

    translate(value: string) {
        this.setAttr("translate", value);
    }






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

class EmptyTag extends Tag {
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

class SelfClosingTag extends Tag {
    constructor(tagName: string, attributes?: { [key: string]: any }) {
        super(tagName, [], attributes);
    }
    start(): string {
        return `<${this.tagName} ${this.attributeString()} />`
    }

    end(): string {
        return "";
    }


}


class MetaTag extends SelfClosingTag {
    constructor(attributes?: { [key: string]: any }) {
        super("meta", attributes);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    content(value: string) {
        this.setAttr("content", value);
    }

    charset(value: string) {
        this.setAttr("charset", value);
    }
}


class LinkTag extends EmptyTag {

    constructor();
    constructor(rel: string | undefined, href: string | undefined);
    constructor(rel?: string, href?: string) {
        super("link");
        if (rel) this.rel(rel);
        if (href) this.href(href);
    }

    href(value: string) {
        this.setAttr("href", value);
    }

    rel(value: string) {
        this.setAttr("rel", value);
    }

    toString(): string {
        if (!this.getAttr("rel") || !this.getAttr("href"))
            throw new Error("LinkTag must have rel and href attributes");
        return super.toString();
    }
}


class StylesheetTag extends LinkTag {
    constructor(href: string) {

        super("stylesheet", href)
    }
}


export { Tag, SelfClosingTag, EmptyTag, MetaTag, LinkTag, StylesheetTag, childrenType }
// export {Tag} ;