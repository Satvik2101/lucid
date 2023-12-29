class Tag {
    name: string;
    attributes: {
        [key:string]:any
    };
    body: string;

    constructor(otherName:string, otherAttri:{[key:string]:any}, otherBody:string|undefined) {
        this.name = otherName;
        this.attributes = otherAttri;
        this.body = otherBody || "";
    }

    attributeString() {
        var attributeString = "";
        for (var attribute in this.attributes) {
            attributeString += `${attribute}="${(this.attributes)[attribute]}" `;
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
    constructor(name:string, attributes:{[key:string]:any}, body:string) {
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
    constructor(attributes:{[key:string]:any}) {
        super("meta", attributes, "");
    }
}

interface LinkTagAttributes {
    rel:string;
    href: string;
    [propName: string]: any;
}
class LinkTag extends SelfClosingTag {
    constructor(attributes:LinkTagAttributes) {
        super("link", attributes,"");
    }
}

interface StylesheetTagAttributes {
    href: string;
    [propName: string]: any;

}
class StylesheetTag extends LinkTag {
    constructor(attributes:StylesheetTagAttributes) {

        var newAttributes = {
            rel: "stylesheet",
            ...attributes
        }
        super(newAttributes);
    }
}

export  {Tag, SelfClosingTag, MetaTag, LinkTag, StylesheetTag};

// export {Tag} ;