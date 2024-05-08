import Img from "../../tags/Img";
import { faker } from '@faker-js/faker'


describe("Img", () => {

    let tag: Img;

    beforeEach(() => {
        tag = new Img();
    });

    it("should set tag name as img", () => {
        expect(tag.tagName).toBe("img");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"align": faker.lorem.word(),
			"alt": faker.lorem.word(),
			"border": faker.lorem.word(),
			"crossorigin": faker.lorem.word(),
			"decoding": faker.lorem.word(),
			"height": faker.lorem.word(),
			"intrinsicsize": faker.lorem.word(),
			"ismap": faker.lorem.word(),
			"loading": faker.lorem.word(),
			"referrerpolicy": faker.lorem.word(),
			"sizes": faker.lorem.word(),
			"src": faker.lorem.word(),
			"srcset": faker.lorem.word(),
			"usemap": faker.lorem.word(),
			"width": faker.lorem.word(),
			"accesskey": faker.lorem.word(),
			"autocapitalize": faker.lorem.word(),
			"class": faker.lorem.word(),
			"contenteditable": faker.lorem.word(),
			"contextmenu": faker.lorem.word(),
			"dir": faker.lorem.word(),
			"draggable": faker.lorem.word(),
			"hidden": faker.lorem.word(),
			"id": faker.lorem.word(),
			"itemprop": faker.lorem.word(),
			"lang": faker.lorem.word(),
			"role": faker.lorem.word(),
			"slot": faker.lorem.word(),
			"spellcheck": faker.lorem.word(),
			"style": faker.lorem.word(),
			"tabindex": faker.lorem.word(),
			"title": faker.lorem.word(),
			"translate": faker.lorem.word(),
		};

        tag = Img.withAttributes(attr);
        
        expect(tag.getAttr("align")).toBe(attr["align"]);
		expect(tag.getAttr("alt")).toBe(attr["alt"]);
		expect(tag.getAttr("border")).toBe(attr["border"]);
		expect(tag.getAttr("crossorigin")).toBe(attr["crossorigin"]);
		expect(tag.getAttr("decoding")).toBe(attr["decoding"]);
		expect(tag.getAttr("height")).toBe(attr["height"]);
		expect(tag.getAttr("intrinsicsize")).toBe(attr["intrinsicsize"]);
		expect(tag.getAttr("ismap")).toBe(attr["ismap"]);
		expect(tag.getAttr("loading")).toBe(attr["loading"]);
		expect(tag.getAttr("referrerpolicy")).toBe(attr["referrerpolicy"]);
		expect(tag.getAttr("sizes")).toBe(attr["sizes"]);
		expect(tag.getAttr("src")).toBe(attr["src"]);
		expect(tag.getAttr("srcset")).toBe(attr["srcset"]);
		expect(tag.getAttr("usemap")).toBe(attr["usemap"]);
		expect(tag.getAttr("width")).toBe(attr["width"]);
		expect(tag.getAttr("accesskey")).toBe(attr["accesskey"]);
		expect(tag.getAttr("autocapitalize")).toBe(attr["autocapitalize"]);
		expect(tag.getAttr("class")).toBe(attr["class"]);
		expect(tag.getAttr("contenteditable")).toBe(attr["contenteditable"]);
		expect(tag.getAttr("contextmenu")).toBe(attr["contextmenu"]);
		expect(tag.getAttr("dir")).toBe(attr["dir"]);
		expect(tag.getAttr("draggable")).toBe(attr["draggable"]);
		expect(tag.getAttr("hidden")).toBe(attr["hidden"]);
		expect(tag.getAttr("id")).toBe(attr["id"]);
		expect(tag.getAttr("itemprop")).toBe(attr["itemprop"]);
		expect(tag.getAttr("lang")).toBe(attr["lang"]);
		expect(tag.getAttr("role")).toBe(attr["role"]);
		expect(tag.getAttr("slot")).toBe(attr["slot"]);
		expect(tag.getAttr("spellcheck")).toBe(attr["spellcheck"]);
		expect(tag.getAttr("style")).toBe(attr["style"]);
		expect(tag.getAttr("tabindex")).toBe(attr["tabindex"]);
		expect(tag.getAttr("title")).toBe(attr["title"]);
		expect(tag.getAttr("translate")).toBe(attr["translate"]);
		
    });

    it("should set align attribute", () => {
        const value = faker.lorem.word();
        tag.align(value);
        expect(tag.getAttr("align")).toBe(value);
    });

	it("should set alt attribute", () => {
        const value = faker.lorem.word();
        tag.alt(value);
        expect(tag.getAttr("alt")).toBe(value);
    });

	it("should set border attribute", () => {
        const value = faker.lorem.word();
        tag.border(value);
        expect(tag.getAttr("border")).toBe(value);
    });

	it("should set crossorigin attribute", () => {
        const value = faker.lorem.word();
        tag.crossorigin(value);
        expect(tag.getAttr("crossorigin")).toBe(value);
    });

	it("should set decoding attribute", () => {
        const value = faker.lorem.word();
        tag.decoding(value);
        expect(tag.getAttr("decoding")).toBe(value);
    });

	it("should set height attribute", () => {
        const value = faker.lorem.word();
        tag.height(value);
        expect(tag.getAttr("height")).toBe(value);
    });

	it("should set intrinsicsize attribute", () => {
        const value = faker.lorem.word();
        tag.intrinsicsize(value);
        expect(tag.getAttr("intrinsicsize")).toBe(value);
    });

	it("should set ismap attribute", () => {
        const value = faker.lorem.word();
        tag.ismap(value);
        expect(tag.getAttr("ismap")).toBe(value);
    });

	it("should set loading attribute", () => {
        const value = faker.lorem.word();
        tag.loading(value);
        expect(tag.getAttr("loading")).toBe(value);
    });

	it("should set referrerpolicy attribute", () => {
        const value = faker.lorem.word();
        tag.referrerpolicy(value);
        expect(tag.getAttr("referrerpolicy")).toBe(value);
    });

	it("should set sizes attribute", () => {
        const value = faker.lorem.word();
        tag.sizes(value);
        expect(tag.getAttr("sizes")).toBe(value);
    });

	it("should set src attribute", () => {
        const value = faker.lorem.word();
        tag.src(value);
        expect(tag.getAttr("src")).toBe(value);
    });

	it("should set srcset attribute", () => {
        const value = faker.lorem.word();
        tag.srcset(value);
        expect(tag.getAttr("srcset")).toBe(value);
    });

	it("should set usemap attribute", () => {
        const value = faker.lorem.word();
        tag.usemap(value);
        expect(tag.getAttr("usemap")).toBe(value);
    });

	it("should set width attribute", () => {
        const value = faker.lorem.word();
        tag.width(value);
        expect(tag.getAttr("width")).toBe(value);
    });

	
});
