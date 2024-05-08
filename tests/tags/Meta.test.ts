import Meta from "../../tags/Meta";
import { faker } from '@faker-js/faker'


describe("Meta", () => {

    let tag: Meta;

    beforeEach(() => {
        tag = new Meta();
    });

    it("should set tag name as meta", () => {
        expect(tag.tagName).toBe("meta");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"charset": faker.lorem.word(),
			"content": faker.lorem.word(),
			"http-equiv": faker.lorem.word(),
			"name": faker.lorem.word(),
			"property": faker.lorem.word(),
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

        tag = Meta.withAttributes(attr);
        
        expect(tag.getAttr("charset")).toBe(attr["charset"]);
		expect(tag.getAttr("content")).toBe(attr["content"]);
		expect(tag.getAttr("http-equiv")).toBe(attr["http-equiv"]);
		expect(tag.getAttr("name")).toBe(attr["name"]);
		expect(tag.getAttr("property")).toBe(attr["property"]);
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

    it("should set charset attribute", () => {
        const value = faker.lorem.word();
        tag.charset(value);
        expect(tag.getAttr("charset")).toBe(value);
    });

	it("should set content attribute", () => {
        const value = faker.lorem.word();
        tag.content(value);
        expect(tag.getAttr("content")).toBe(value);
    });

	it("should set http-equiv attribute", () => {
        const value = faker.lorem.word();
        tag.http_equiv(value);
        expect(tag.getAttr("http-equiv")).toBe(value);
    });

	it("should set name attribute", () => {
        const value = faker.lorem.word();
        tag.name(value);
        expect(tag.getAttr("name")).toBe(value);
    });

	it("should set property attribute", () => {
        const value = faker.lorem.word();
        tag.property(value);
        expect(tag.getAttr("property")).toBe(value);
    });

	
});
