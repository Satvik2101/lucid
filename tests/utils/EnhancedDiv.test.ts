import EnhancedDiv from "../../utils/EnhancedDiv";
import Tag from "../../utils/Tag";

// The only thing this class does is set the class, id, and children properties in the Div class
// So we will only test if the properties are set correctly
// We will not test whether rendering is being done correctly, those tests will be in the Div.test.ts file

// We are also not testing various combinations of properties. 
// The properties are independent of each other, so we will test them separately.
describe("EnhancedDiv", () => {

    const tagClass = "container";
    const tagId = "main";
    const tagChildren = [new Tag("h1", "Heading1"), "a Paragraph"];
    let tag: EnhancedDiv;

    beforeEach(() => {
        tag = new EnhancedDiv({ class: tagClass, id: tagId, children: tagChildren });
    });

    it("should set class attribute correctly", () => {
        expect(tag.getAttr("class")).toBe(tagClass);
    });

    it("should set id attribute correctly", () => {
        expect(tag.getAttr("id")).toBe(tagId);
    });

    it("should set children correctly", () => {
        expect(tag.children).toBe(tagChildren);
    });

});