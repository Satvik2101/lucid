import Tag from "./Tag";

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


export default VoidTag;