"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const Anchor_1 = require("../global/Tags/Anchor");
const HorizontalBreak_1 = __importDefault(require("../global/Tags/HorizontalBreak"));
const Image_1 = __importDefault(require("../global/Tags/Image"));
class ContactSection extends Div_1.default {
    constructor() {
        super({
            divClass: "section",
            id: "contact",
            children: [
                new Tag_1.ClassIDTag({ name: "h2", class: "section_title", children: ["Contact"] }),
                new HorizontalBreak_1.default(),
                new Div_1.default({
                    id: "contact_flex_box",
                    children: [
                        new Div_1.default({
                            id: "contact_left",
                            children: [
                                new Tag_1.Tag("h3", {}, "Let's build something great together."),
                                new HorizontalBreak_1.default(),
                                "Want to collaborate on a project? Or just want to say hi?",
                                new HorizontalBreak_1.default(),
                                new HorizontalBreak_1.default(),
                                "Get in touch with me via email at",
                                new Anchor_1.SimpleAnchorTag({ href: "mailto:hello@satvikgupta.com", linkText: "hello@satvikgupta.com" }),
                            ]
                        }), //contact_left
                        new Div_1.default({
                            id: "contact_right",
                            children: [
                                new Image_1.default({ src: "./images/Dashatar.png", alt: "Dashatar" }),
                            ]
                        }) //contact_right
                    ]
                })
            ]
        });
    }
}
exports.default = ContactSection;
