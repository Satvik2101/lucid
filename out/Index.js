"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ContactSection_1 = __importDefault(require("./Contact/ContactSection"));
const BackgroundImageSection_1 = __importDefault(require("./Home/BackgroundImageSection"));
const ProjectsAndPorsSection_1 = __importDefault(require("./Project/ProjectsAndPorsSection"));
const Tag_1 = require("./Tag");
const WorkexpSection_1 = __importDefault(require("./Workexp/WorkexpSection"));
const Footer_1 = __importDefault(require("./global/Footer"));
const Script_1 = __importDefault(require("./global/Tags/Script"));
const Header_1 = require("./global/Header");
class Index extends Tag_1.Tag {
    constructor(rawData) {
        super("html", { lang: "en", ontouchmove: "" }, [
            new Header_1.DefaultHeader(),
            new Tag_1.Tag("body", {}, [
                new BackgroundImageSection_1.default(),
                new WorkexpSection_1.default(rawData.workexp),
                new ProjectsAndPorsSection_1.default({ projects: rawData.projects, pors: rawData.pors })
            ]),
            new ContactSection_1.default(),
            new Footer_1.default(),
            new Script_1.default("./scripts/typewriter.js"),
            new Script_1.default("./scripts/workexp_chooser.js"),
        ]);
    }
    start() {
        return `<!DOCTYPE html>` + "\n" + super.start();
    }
}
exports.default = Index;
