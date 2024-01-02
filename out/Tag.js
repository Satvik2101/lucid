"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassIDTag = exports.StylesheetTag = exports.LinkTag = exports.MetaTag = exports.SelfClosingTag = exports.EmptyTag = exports.Tag = void 0;
class Tag {
    constructor(name, attributes, children) {
        this.name = name;
        this.attributes = attributes;
        this.children = children || "";
    }
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
    start() {
        return `<${this.name} ${this.attributeString()}>`;
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
    end() {
        return `</${this.name}>`;
    }
    toString() {
        return this.start() + this.body() + this.end();
    }
}
exports.Tag = Tag;
class EmptyTag extends Tag {
    constructor(name, attributes) {
        super(name, attributes, []);
    }
    start() {
        return `<${this.name} ${this.attributeString()}>`;
    }
    end() {
        return "";
    }
}
exports.EmptyTag = EmptyTag;
class SelfClosingTag extends Tag {
    constructor(name, attributes) {
        super(name, attributes, []);
    }
    start() {
        return `<${this.name} ${this.attributeString()} />`;
    }
    end() {
        return "";
    }
}
exports.SelfClosingTag = SelfClosingTag;
class MetaTag extends SelfClosingTag {
    constructor(attributes) {
        super("meta", attributes);
    }
}
exports.MetaTag = MetaTag;
class LinkTag extends EmptyTag {
    constructor(attributes) {
        super("link", attributes);
    }
}
exports.LinkTag = LinkTag;
class StylesheetTag extends LinkTag {
    constructor(attributes) {
        var newAttributes = Object.assign({ rel: "stylesheet" }, attributes);
        super(newAttributes);
    }
}
exports.StylesheetTag = StylesheetTag;
class ClassIDTag extends Tag {
    constructor(props) {
        var _a;
        var attributes = Object.assign({ class: props.class, id: props.id }, ((_a = props.otherAttributes) !== null && _a !== void 0 ? _a : {}));
        super(props.name, attributes, props.children);
    }
}
exports.ClassIDTag = ClassIDTag;
// export {Tag} ;
