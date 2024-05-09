import fs from 'fs';

class TagRegistry {
    //this class is a singleton

    voidTags = [
        "area",
        "base",
        "br",
        "col",
        "embed",
        "hr",
        "img",
        "input",
        "link",
        "meta",
        "param",
        "source",
        "track",
        "wbr"
    ]

    static instance?: TagRegistry;
    registry: { [key: string]: string[] } = {};
    constructor() {
        if (!TagRegistry.instance) {
            this.registry = {};
            TagRegistry.instance = this;
            var rawJsonContents = fs.readFileSync("./html-tags-attributes.json");

            this.registry = JSON.parse(rawJsonContents.toString());
        }
        return TagRegistry.instance;
    }

    getTagAttributes(tag: string) {
        return this.registry[tag];
    }
    getGlobalAttributes() {
        return this.registry["*"];
    }
    getAllTags() {
        return Object.keys(this.registry).filter(tag => tag != "*");
    }

    isVoid(tag: string) {
        return this.voidTags.includes(tag);
    }
}

export default TagRegistry;