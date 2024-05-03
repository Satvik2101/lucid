import Tag from "../../utils/Tag";

//the Tag class is not generated, so it's test is written manually.
//Generated classes will have their tests generated as well.


describe("Tag", () => {


    let tag: Tag = new Tag("html");

    beforeEach(() => {
        tag = new Tag("html");
    });


    it("should have the correct tag name", () => {
        expect(tag.tagName).toBe("html");
    });


    it("should set a single attribute correctly", () => {
        tag.setAttr("lang", "en");
        expect(tag.getAttr("lang")).toBe("en");
        expect(tag.attributes["lang"]).toBe("en");
        tag.attributes = {};// reset the attributes
    });

    const possibleChildren = [new Tag("head"), "Paragraph", [new Tag("body"), "Another Paragraph"], undefined];

    test.each(possibleChildren)("should set the children correctly,for all possible types of children", (children) => {
        tag.populate(children);
        expect(tag.children).toBe(children);
    })

    test.each(possibleChildren)("should set the children correctly,for all possible types of children, using the shorthand method", (children) => {
        tag.p(children);
        expect(tag.children).toBe(children);
    });

    it("should set all attributes together correctly", () => {
        const attributes = { lang: "en", class: "container" };
        tag.attrs(attributes);
        expect(tag.getAttr("lang")).toBe("en");
        expect(tag.getAttr("class")).toBe("container");
        expect(tag.attributes).toEqual(attributes);
    })

    it("should generate attributeString from attributes", () => {
        const attributes = { lang: "en", class: "inputBox", "checked": null };

        tag.attrs(attributes);
        //replace with toMatch
        expect(tag.attributeString()).toMatch(/lang="en" class="inputBox" checked=""/);

    })

    it("should create the start of the tag correctly, if no attributes are present.", () => {
        const expectedTagOptions = ["<html>", "<html >"];
        //tag.getStart() must be ONE of the expectedTagOptions

        const tagStart = tag.getStart();
        expect(expectedTagOptions).toContain(tagStart);
    })

    it("should create the start of the tag correctly, if attributes are present.", () => {
        const attributes = { lang: "en", class: "inputBox", "checked": null };
        tag.attrs(attributes);
        tag.setName("input")

        //attributes can be in any order
        //spacing may be present before or after the tag

        const tagStart = tag.getStart();
        expect(tagStart).toMatch(/<input lang="en" class="inputBox" checked="">/);

    });

    it("should create the end of the tag correctly", () => {
        expect(tag.getEnd()).toBe("</html>");
    });

    it("should render children correctly", () => {
        const children = [new Tag("head"), "Paragraph", [new Tag("body", "Another Paragraph"), "A third paragraph"], undefined];
        const expectedValues = [/<head><\/head>/, /Paragraph/, /<body>Another Paragraph<\/body>A third paragraph/, ""];

        for (let i = 0; i < children.length; i++) {
            tag.populate(children[i]);
            const tagBody = tag.body().replace(/\n/g, "");
            expect(tagBody).toMatch(expectedValues[i]);
        }
    })

    it("should render the tag correctly", () => {
        const attributes = { lang: "en", class: "inputBox", "checked": "" };
        tag.attrs(attributes);
        tag.setName("input")
        tag.populate("Some Text");
        let renderedTag = tag.toString();
        //remove \n
        renderedTag = renderedTag.replace(/\n/g, "");
        expect(renderedTag).toMatch(/<input lang="en" class="inputBox" checked="">Some Text<\/input>/);

    })
})