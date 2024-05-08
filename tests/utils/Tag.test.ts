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

    //Tests for Global Setters
    //-----------------------------------------------------------------------
    //-----------------------------------------------------------------------


    //class
    it("should set class attribute correctly", () => {
        tag.class("container");
        expect(tag.getAttr("class")).toBe("container");
    });


    //id
    it("should set the id attribute correctly", () => {
        tag.id("main");
        expect(tag.getAttr("id")).toBe("main");
    });

    //style
    it("should set the style attribute correctly", () => {
        tag.style("color:red");
        expect(tag.getAttr("style")).toBe("color:red");
    });

    //on-*
    it("should set event attributes (on-*) correctly", () => {
        tag.on("click", "alert('Hello')");
        expect(tag.getAttr("onclick")).toBe("alert('Hello')");
    });

    //accesskey
    it("should set accesskey attribute correctly", () => {
        tag.accesskey("a");
        expect(tag.getAttr("accesskey")).toBe("a");
    });

    //autocapitalize
    it("should set autocapitalize attribute correctly", () => {
        tag.autocapitalize("off");
        expect(tag.getAttr("autocapitalize")).toBe("off");
    });

    //autofocus
    it("should set autofocus attribute correctly", () => {
        tag.autofocus();
        expect(tag.getAttr("autofocus")).toBe("");
    });

    //contenteditable
    it("should set contenteditable attribute correctly", () => {
        tag.contenteditable("true");
        expect(tag.getAttr("contenteditable")).toBe("true");
    });

    //dir
    it("should set dir attribute correctly", () => {
        tag.dir("rtl");
        expect(tag.getAttr("dir")).toBe("rtl");
    });

    //enterkeyhint
    it("should set enterkeyhint attribute correctly", () => {
        tag.enterkeyhint("enter");
        expect(tag.getAttr("enterkeyhint")).toBe("enter");
    });

    //exportparts
    it("should set exportparts attribute correctly", () => {
        tag.exportparts("part1");
        expect(tag.getAttr("exportparts")).toBe("part1");
    });

    //hidden
    it("should set hidden attribute correctly", () => {
        tag.hidden("true");
        expect(tag.getAttr("hidden")).toBe("true");
    });

    //inert
    it("should set inert attribute correctly", () => {
        tag.inert("true");
        expect(tag.getAttr("inert")).toBe("true");
    });

    //inputmode
    it("should set inputmode attribute correctly", () => {
        tag.inputmode("numeric");
        expect(tag.getAttr("inputmode")).toBe("numeric");
    });

    //is
    it("should set is attribute correctly", () => {
        tag.is("input");
        expect(tag.getAttr("is")).toBe("input");
    });

    //lang
    it("should set lang attribute correctly", () => {
        tag.lang("en");
        expect(tag.getAttr("lang")).toBe("en");
    });

    //nonce
    it("should set nonce attribute correctly", () => {
        tag.nonce("1234");
        expect(tag.getAttr("nonce")).toBe("1234");
    });

    //part
    it("should set part attribute correctly", () => {
        tag.part("part1");
        expect(tag.getAttr("part")).toBe("part1");
    });

    //popover
    it("should set popover attribute correctly", () => {
        tag.popover("popover1");
        expect(tag.getAttr("popover")).toBe("popover1");
    });

    //role
    it("should set role attribute correctly", () => {
        tag.role("button");
        expect(tag.getAttr("role")).toBe("button");
    });

    //slot
    it("should set slot attribute correctly", () => {
        tag.slot("slot1");
        expect(tag.getAttr("slot")).toBe("slot1");
    });

    //spellcheck
    it("should set spellcheck attribute correctly", () => {
        tag.spellcheck("true");
        expect(tag.getAttr("spellcheck")).toBe("true");
    });

    //tabindex
    it("should set tabindex attribute correctly", () => {
        tag.tabindex("1");
        expect(tag.getAttr("tabindex")).toBe("1");
    });

    //title
    it("should set title attribute correctly", () => {
        tag.title("Hello");
        expect(tag.getAttr("title")).toBe("Hello");
    });

    //translate
    it("should set translate attribute correctly", () => {
        tag.translate("no");
        expect(tag.getAttr("translate")).toBe("no");
    });

})