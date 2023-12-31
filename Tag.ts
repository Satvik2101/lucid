type childrenType = (string | Tag)[] | string | Tag | undefined;

class Tag {
    name: string;
    attributes: {
        [key: string]: any
    };
    children: childrenType

    constructor(name: string, attributes: { [key: string]: any }, children: childrenType) {
        this.name = name;
        this.attributes = attributes;
        this.children = children || "";
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
        return `<${this.name} ${this.attributeString()}>`

    }

    body(): string {
        if (this.children == undefined) return "";
        if (typeof this.children == "string") return this.children;
        if (this.children instanceof Tag) return this.children.toString();
        return this.children.map((child) => child.toString()).join("\n");
    }

    end(): string {
        return `</${this.name}>`
    }

    toString(): string {
        return this.start() + this.body() + this.end();

    }
}

class EmptyTag extends Tag {
    constructor(name: string, attributes: { [key: string]: any }) {
        super(name, attributes, []);
    }
    start(): string {
        return `<${this.name} ${this.attributeString()}>`
    }

    end(): string {
        return "";
    }

}

class SelfClosingTag extends Tag {
    constructor(name: string, attributes: { [key: string]: any }) {
        super(name, attributes, []);
    }
    start(): string {
        return `<${this.name} ${this.attributeString()} />`
    }

    end(): string {
        return "";
    }


}


class MetaTag extends SelfClosingTag {
    constructor(attributes: { [key: string]: any }) {
        super("meta", attributes);
    }
}

interface LinkTagAttributes {
    rel: string;
    href: string;
    [propName: string]: any;
}
class LinkTag extends EmptyTag {
    constructor(attributes: LinkTagAttributes) {
        super("link", attributes);
    }
}

interface StylesheetTagAttributes {
    href: string;
    [propName: string]: any;

}
class StylesheetTag extends LinkTag {
    constructor(attributes: StylesheetTagAttributes) {

        var newAttributes = {
            rel: "stylesheet",
            ...attributes
        }
        super(newAttributes);
    }
}

class ClassIDTag extends Tag {
constructor(props: { name: string, children?: childrenType, class?: string, id?: string, otherAttributes?: { [key: string]: any } }) {
        var attributes = {
            class: props.class,
            id: props.id,
            ...(props.otherAttributes ?? {})
        }
        super(props.name, attributes, props.children);
    }


}

export { childrenType, Tag, EmptyTag, SelfClosingTag, MetaTag, LinkTag, StylesheetTag, ClassIDTag };

// export {Tag} ;