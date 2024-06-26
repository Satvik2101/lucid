import Source from "../../tags/Source";
import { faker } from '@faker-js/faker'


describe("Source", () => {

    let tag: Source;

    beforeEach(() => {
        tag = new Source();
    });

    it("should set tag name as source", () => {
        expect(tag.tagName).toBe("source");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"media": faker.lorem.word(),
			"sizes": faker.lorem.word(),
			"src": faker.lorem.word(),
			"srcset": faker.lorem.word(),
			"type": faker.lorem.word(),
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

        tag = Source.withAttributes(attr);
        
        expect(tag.getAttr("media")).toBe(attr["media"]);
		expect(tag.getAttr("sizes")).toBe(attr["sizes"]);
		expect(tag.getAttr("src")).toBe(attr["src"]);
		expect(tag.getAttr("srcset")).toBe(attr["srcset"]);
		expect(tag.getAttr("type")).toBe(attr["type"]);
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

    it("should set media attribute", () => {
        const value = faker.lorem.word();
        tag.media(value);
        expect(tag.getAttr("media")).toBe(value);
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

	it("should set type attribute", () => {
        const value = faker.lorem.word();
        tag.type(value);
        expect(tag.getAttr("type")).toBe(value);
    });

	
});
