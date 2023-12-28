class Tag {
    constructor(name, attributes, body) {
        this.name = name;
        this.attributes = attributes;
        this.body = body || "";
    }

    attributeString() {
        var attributeString = "";
        for (var attribute in this.attributes) {
            attributeString += `${attribute}="${this.attributes[attribute]}" `;
        }
        return attributeString;
    }
    start() {
        return `<${this.name} ${this.attributeString()}>`

    }

    end() {
        return `</${this.name}>`
    }

    toString() {
        return this.start() + this.body + this.end();

    }
}

class SelfClosingTag extends Tag {
    constructor(name, attributes, body) {
        super(name, attributes, body);
    }
    start() {
        return `<${this.name} ${this.attributeString()} />`
    }

    end() {
        return "";
    }


}


class MetaTag extends SelfClosingTag {
    constructor(attributes) {
        super("meta", attributes);
    }
}

class LinkTag extends SelfClosingTag {
    constructor(attributes) {
        if (!attributes.rel) {
            throw new Error("Link tag must have a rel attribute");
        }
        if (!attributes.href) {
            throw new Error("Link tag must have a href attribute");
        }
        super("link", attributes);
    }
}

class StylesheetTag extends LinkTag {
    constructor(attributes) {

        if (attributes.rel && attributes.rel !== "stylesheet") {
            throw new Error("Stylesheet tag must have a rel attribute with value stylesheet");
        }
        attributes.rel = "stylesheet"
        super(attributes);
    }
}
module.exports = { Tag, SelfClosingTag, MetaTag, LinkTag, StylesheetTag };