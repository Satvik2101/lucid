"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../Tag");
class Footer extends Tag_1.Tag {
    constructor() {
        super("footer", {}, [
            "Built",
            new Tag_1.ClassIDTag({ name: "i", class: "fa-solid fa-code" }),
            "by Satvik Gupta"
        ]);
    }
}
exports.default = Footer;
