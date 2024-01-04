"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Br_1 = __importDefault(require("../tags/Br"));
const Div_1 = __importDefault(require("../tags/Div"));
const H2_1 = __importDefault(require("../tags/H2"));
const H3_1 = __importDefault(require("../tags/H3"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const EnhancedImg_1 = __importDefault(require("../utils/EnhancedImg"));
const SimpleAnchor_1 = __importDefault(require("../utils/SimpleAnchor"));
class ContactSection extends EnhancedDiv_1.default {
    constructor() {
        super({
            class: "section",
            id: "contact",
            children: [
                new H2_1.default("Contact").class("section_title"),
                new Br_1.default(),
                new Div_1.default([
                    new Div_1.default([
                        new H3_1.default("Let's build something great together."),
                        new Br_1.default(),
                        "Want to collaborate on a project? Or just want to say hi?",
                        new Br_1.default(),
                        new Br_1.default(),
                        "Get in touch with me via email at",
                        new SimpleAnchor_1.default({ href: "mailto:hello@satvikgupta.com", linkText: "hello@satvikgupta.com" }),
                    ]).id("contact_left"), //contact_left
                    new Div_1.default([
                        new EnhancedImg_1.default({ src: "./images/Dashatar.png", alt: "Dashatar" }),
                    ]).id("contact_right") //contact_right
                ]).id("contact_flex_box"),
            ]
        });
    }
}
exports.default = ContactSection;
