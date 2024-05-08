import EnhancedScript from "../../utils/EnhancedScript";

describe("EnhancedScript", () => {

    const src = "https://example.com/script.js";
    let tag: EnhancedScript;

    beforeEach(() => {
        tag = new EnhancedScript(src);
    });

    it("should have the correct tag name", () => {
        expect(tag.tagName).toBe("script");
    });

    it("should set src attribute correctly", () => {
        expect(tag.getAttr("src")).toBe(src);
    });
});