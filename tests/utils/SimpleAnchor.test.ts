import SimpleAnchor from "../../utils/SimpleAnchor";

describe("SimpleAnchor", () => {

    const href = "https://example.com";
    const linkText = "Click me!";
    let tag: SimpleAnchor;

    beforeEach(() => {
        tag = new SimpleAnchor({ href: href, linkText: linkText });
    });

    it("should have the correct tag name", () => {
        expect(tag.tagName).toBe("a");
    });

    it("should set href attribute correctly", () => {
        expect(tag.getAttr("href")).toBe(href);
    });

    it("should set link text (children) correctly", () => {
        expect(tag.body()).toBe(linkText);
    });
})