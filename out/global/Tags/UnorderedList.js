"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../../Tag");
class UnorderedList extends Tag_1.ClassIDTag {
    constructor(items, listClass, id) {
        super({
            name: "ul",
            class: listClass,
            id: id,
            children: items.map((item) => new Tag_1.Tag("li", {}, [item]))
        });
    }
}
exports.default = UnorderedList;
