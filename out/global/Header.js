"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultHeader = exports.Header = void 0;
const Tag_1 = require("../Tag");
class Header extends Tag_1.Tag {
    constructor(props) {
        var _a, _b;
        const titleTag = props.title ? new Tag_1.Tag("title", {}, [props.title]) : "";
        var stylesheets = (_a = props.stylesheets) === null || _a === void 0 ? void 0 : _a.map((stylesheet) => {
            return new Tag_1.StylesheetTag({ href: stylesheet });
        });
        stylesheets = [...(stylesheets !== null && stylesheets !== void 0 ? stylesheets : []), ...((_b = props.stylesheetTags) !== null && _b !== void 0 ? _b : [])];
        super("head", {}, [
            new Tag_1.MetaTag({ charset: "UTF-8" }),
            new Tag_1.MetaTag({ "http-equiv": "X-UA-Compatible", content: "IE=edge" }),
            new Tag_1.MetaTag({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
            new Tag_1.EmptyTag("base", { target: "_blank", rel: "noreferrer noopener" }),
            new Tag_1.LinkTag({ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }),
            props.description ? new Tag_1.MetaTag({ name: "description", content: props.description }) : "",
            props.title ? new Tag_1.MetaTag({ property: "og:title", content: props.title }) : "",
            props.description ? new Tag_1.MetaTag({ property: "og:description", content: props.description }) : "",
            props.image ? new Tag_1.MetaTag({ property: "og:image", content: props.image }) : "",
            props.url ? new Tag_1.MetaTag({ property: "og:url", content: props.url }) : "",
            new Tag_1.LinkTag({ rel: "canonical", href: "https://www.satvikgupta.com" }),
            new Tag_1.LinkTag({ rel: "preconnect", href: "https://fonts.googleapis.com" }),
            new Tag_1.LinkTag({ rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }),
            ...(stylesheets !== null && stylesheets !== void 0 ? stylesheets : []),
            titleTag
        ]);
        // return new Tag("head", {}, body)
    }
}
exports.Header = Header;
class DefaultHeader extends Header {
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
