"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidTag = exports.Tag = void 0;
class Tag {
    constructor(tagName, children, attributes) {
        this.tagName = tagName;
        this.attributes = attributes !== null && attributes !== void 0 ? attributes : {};
        this.children = children || "";
    }
    static from(tag) {
        return new Tag(tag.tagName, tag.children, tag.attributes);
    }
    // Getters and Setters
    setName(name) {
        this.tagName = name;
        return this;
    }
    getName() {
        return this.tagName;
    }
    setAttr(key, value) {
        this.attributes[key] = value;
        return this;
    }
    getAttr(key) {
        return this.attributes[key];
    }
    //sets the children array
    populate(children) {
        this.children = children;
        return this;
    }
    //shorthand for populate
    p(children) {
        return this.populate(children);
    }
    attrs(attributes) {
        this.attributes = attributes;
        return this;
    }
    // Setters for global attributes
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes
    // The values for these are NOT validated.
    class(value) {
        if (value)
            this.setAttr("class", value);
        return this;
    }
    id(value) {
        if (value)
            this.setAttr("id", value);
        return this;
    }
    style(value) {
        if (value)
            this.setAttr("style", value);
        return this;
    }
    on(event, handler) {
        if (event)
            this.setAttr(`on${event}`, handler !== null && handler !== void 0 ? handler : "");
        return this;
    }
    accesskey(value) {
        if (value)
            this.setAttr("accesskey", value);
        return this;
    }
    autocapitalize(value) {
        if (value)
            this.setAttr("autocapitalize", value);
        return this;
    }
    autofocus(value) {
        if (value)
            this.setAttr("autofocus", value);
        return this;
    }
    contenteditable(value) {
        if (value)
            this.setAttr("contenteditable", value);
        return this;
    }
    dir(value) {
        if (value)
            this.setAttr("dir", value);
        return this;
    }
    draggable(value) {
        if (value)
            this.setAttr("draggable", value);
        return this;
    }
    enterkeyhint(value) {
        if (value)
            this.setAttr("enterkeyhint", value);
        return this;
    }
    exportparts(value) {
        if (value)
            this.setAttr("exportparts", value);
        return this;
    }
    hidden(value) {
        if (value)
            this.setAttr("hidden", value);
        return this;
    }
    inert(value) {
        if (value)
            this.setAttr("inert", value);
        return this;
    }
    inputmode(value) {
        if (value)
            this.setAttr("inputmode", value);
        return this;
    }
    is(value) {
        if (value)
            this.setAttr("is", value);
        return this;
    }
    //WHATWG HTML Microdata feature attributes have been skipped.
    lang(value) {
        if (value)
            this.setAttr("lang", value);
        return this;
    }
    nonce(value) {
        if (value)
            this.setAttr("nonce", value);
        return this;
    }
    part(value) {
        if (value)
            this.setAttr("part", value);
        return this;
    }
    popover(value) {
        if (value)
            this.setAttr("popover", value);
        return this;
    }
    role(value) {
        if (value)
            this.setAttr("role", value);
        return this;
    }
    slot(value) {
        if (value)
            this.setAttr("slot", value);
        return this;
    }
    spellcheck(value) {
        if (value)
            this.setAttr("spellcheck", value);
        return this;
    }
    tabindex(value) {
        if (value)
            this.setAttr("tabindex", value);
        return this;
    }
    title(value) {
        if (value)
            this.setAttr("title", value);
        return this;
    }
    translate(value) {
        if (value)
            this.setAttr("translate", value);
        return this;
    }
    // Methods
    attributeString() {
        var attributeString = "";
        for (var attribute in this.attributes) {
            const value = this.attributes[attribute];
            if (value == undefined || null)
                continue;
            attributeString += `${attribute}="${value}" `;
        }
        return attributeString;
    }
    getStart() {
        return `<${this.tagName} ${this.attributeString()}>`;
    }
    body() {
        if (this.children == undefined)
            return "";
        if (typeof this.children == "string")
            return this.children;
        if (this.children instanceof Tag)
            return this.children.toString();
        return this.children.map((child) => child.toString()).join("\n");
    }
    getEnd() {
        return `</${this.tagName}>`;
    }
    toString() {
        return this.getStart() + this.body() + this.getEnd();
    }
}
exports.Tag = Tag;
class VoidTag extends Tag {
    constructor(tagName, attributes) {
        super(tagName, [], attributes);
    }
    start() {
        return `<${this.tagName} ${this.attributeString()}>`;
    }
    end() {
        return "";
    }
}
exports.VoidTag = VoidTag;
// export {Tag} ;
