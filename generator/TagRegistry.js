const fs = require('fs');

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
    constructor() {
        if (!TagRegistry.instance) {
            this.registry = {};
            TagRegistry.instance = this;
            var rawJsonContents = fs.readFileSync("./html-tags-attributes.json");

            this.registry = JSON.parse(rawJsonContents);
        }
        return TagRegistry.instance;
    }

    getTagAttributes(tag) {
        return this.registry[tag];
    }
    getGlobalAttributes() {
        return this.registry["*"];
    }
    getAllTags() {
        return Object.keys(this.registry).filter(tag => tag != "*");
    }

    isVoid(tag) {
        return this.voidTags.includes(tag);
    }
}

module.exports = TagRegistry;