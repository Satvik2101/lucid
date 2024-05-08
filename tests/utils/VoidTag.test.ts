import VoidTag from "../../utils/VoidTag";

describe("VoidTag", () => {
    let tag: VoidTag = new VoidTag("img");

    beforeEach(() => {
        tag = new VoidTag("img");
    });

    //all methods except getEnd are inherited from Tag

    it("should not have any closing tag", () => {
        expect(tag.getEnd()).toBe("");
    })


    it("should render the tag correctly, when no attributes are present", () => {
        expect(tag.toString()).toBe('<img>');
    })

    it("should render the tag correctly, when attributes are present", () => {
        tag.attrs({ src: "image.jpg", alt: "An image" });
        expect(tag.toString()).toBe('<img src="image.jpg" alt="An image">');
    });

});