"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Script_1 = __importDefault(require("./tags/Script"));
const Tag_1 = require("./utils/Tag");
const ContactSection_1 = __importDefault(require("./Contact/ContactSection"));
const BackgroundImageSection_1 = __importDefault(require("./Home/BackgroundImageSection"));
const ProjectsAndPorsSection_1 = __importDefault(require("./Project/ProjectsAndPorsSection"));
const WorkexpSection_1 = __importDefault(require("./Workexp/WorkexpSection"));
const PortfolioFooter_1 = __importDefault(require("./global/PortfolioFooter"));
const PortfolioHead_1 = require("./global/PortfolioHead");
class Index extends Tag_1.Tag {
    constructor(rawData) {
        super("html", [
            new PortfolioHead_1.DefaultHeader(),
            new Tag_1.Tag("body", [
                new BackgroundImageSection_1.default(),
                new WorkexpSection_1.default(rawData.workexp),
                new ProjectsAndPorsSection_1.default({ projects: rawData.projects, pors: rawData.pors })
            ]),
            new ContactSection_1.default(),
            new PortfolioFooter_1.default(),
            new Script_1.default().src("./scripts/typewriter.js"),
            new Script_1.default().src("./scripts/workexp_chooser.js"),
        ], { lang: "en", ontouchmove: "" });
    }
    getStart() {
        return `<!DOCTYPE html>` + "\n" + super.getStart();
    }
}
exports.default = Index;
