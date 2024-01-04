"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHeader = exports.Header = void 0;
const Base_1 = __importDefault(require("../tags/Base"));
const Head_1 = __importDefault(require("../tags/Head"));
const Link_1 = __importDefault(require("../tags/Link"));
const Meta_1 = __importDefault(require("../tags/Meta"));
const Title_1 = __importDefault(require("../tags/Title"));
class PortfolioHead extends Head_1.default {
    constructor(props) {
        var _a;
        const titleTag = props.title ? new Title_1.default(props.title) : "";
        var stylesheets = (_a = props.stylesheets) === null || _a === void 0 ? void 0 : _a.map((stylesheet) => {
            return new Link_1.default().rel("stylesheet").href(stylesheet);
        });
        super([
            new Meta_1.default().charset("UTF-8"),
            new Meta_1.default().http_equiv("X-UA-Compatible").content("IE=edge"),
            new Meta_1.default().name("viewport").content("width=device-width, initial-scale=1.0"),
            new Base_1.default().target("_blank"),
            new Link_1.default().rel("icon").href("/favicon.ico").type("image/x-icon"),
            props.description ? new Meta_1.default().name("description").content(props.description) : "",
            props.title ? new Meta_1.default().property("og:title").content(props.title) : "",
            props.description ? new Meta_1.default().property("og:description").content(props.description) : "",
            props.image ? new Meta_1.default().property("og:image").content(props.image) : "",
            props.url ? new Meta_1.default().property("og:url").content(props.url) : "",
            new Link_1.default().rel("canonical").href("https://www.satvikgupta.com"),
            new Link_1.default().rel("preconnect").href("https://fonts.googleapis.com"),
            new Link_1.default().rel("preconnect").href("https://fonts.gstatic.com").crossorigin(""),
            ...(stylesheets !== null && stylesheets !== void 0 ? stylesheets : []),
            titleTag
        ]);
        // return new Tag("head", {}, body)
    }
}
exports.Header = PortfolioHead;
class DefaultHeader extends PortfolioHead {
    constructor() {
        super({
            title: "Satvik Gupta",
            description: "I'm Satvik Gupta, a Software Developer. This is my Portfolio Website.",
            image: "https://www.satvikgupta.com/images/preview.png",
            url: "https://www.satvikgupta.com",
            stylesheets: [
                "https://fonts.googleapis.com/css2?family=Open+Sans&family=Righteous:wght@400;900&family=Roboto+Slab:wght@400;700&family=Cinzel+Decorative:wght@900&family=Black+Ops+One&display=swap",
                "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css",
                "/styles.css"
            ],
        });
    }
}
exports.DefaultHeader = DefaultHeader;
