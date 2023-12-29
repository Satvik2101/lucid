type childrenType = (string|Tag )[] | string | Tag; 

class Tag {
    name: string;
    attributes: {
        [key:string]:any
    };
    children: childrenType

    constructor(otherName:string, otherAttri:{[key:string]:any}, otherChildren:childrenType) {
        this.name = otherName;
        this.attributes = otherAttri;
        this.children = otherChildren || "";
    }

    attributeString() {
        var attributeString = "";
        for (var attribute in this.attributes) {
            attributeString += `${attribute}="${(this.attributes)[attribute]}" `;
        }
        return attributeString;
    }
    start():string {
        return `<${this.name} ${this.attributeString()}>`

    }

    body(): string {
        if (typeof this.children == "string") return this.children;
        if ( this.children instanceof Tag) return this.children.toString();
        return this.children.map((child) => child.toString()).join("\n");
    }

    end():string {
        return `</${this.name}>`
    }

    toString():string {
        return this.start() + this.body() + this.end();

    }
}

class EmptyTag extends Tag { 
    constructor(name:string, attributes:{[key:string]:any}) {
        super(name, attributes,[]);
    }
    start():string {
        return `<${this.name} ${this.attributeString()}>`
    }

    end():string {
        return "";
    }

}

class SelfClosingTag extends Tag {
    constructor(name:string, attributes:{[key:string]:any}) {
        super(name, attributes,[]);
    }
    start():string {
        return `<${this.name} ${this.attributeString()} />`
    }

    end():string {
        return "";
    }


}


class MetaTag extends SelfClosingTag {
    constructor(attributes:{[key:string]:any}) {
        super("meta", attributes);
    }
}

interface LinkTagAttributes {
    rel:string;
    href: string;
    [propName: string]: any;
}
class LinkTag extends EmptyTag {
    constructor(attributes:LinkTagAttributes) {
        super("link", attributes);
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

export  {childrenType, Tag, EmptyTag,SelfClosingTag, MetaTag, LinkTag, StylesheetTag};

// export {Tag} ;