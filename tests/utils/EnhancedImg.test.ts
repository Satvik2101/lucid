import EnhancedImg from "../../utils/EnhancedImg";

// Similar to EnhancedDiv.test.ts, we will only test if the src and alt properties are set correctly.
// Rendering and other tests will be in the Img.test.ts file
describe("EnhancedImg", () => {

    const src = "image.jpg";
    const alt = "A beautiful image";
    let tag: EnhancedImg;

    beforeEach(() => {
        tag = new EnhancedImg({ src: src, alt: alt });
    });

    it("should have the correct tag name", () => {
        expect(tag.tagName).toBe("img");
    });

    it("should set src attribute correctly", () => {
        expect(tag.getAttr("src")).toBe(src);
    });

    it("should set alt attribute correctly", () => {
        expect(tag.getAttr("alt")).toBe(alt);
    });
});