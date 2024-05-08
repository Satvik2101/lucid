import Script from "../../tags/Script";
import { faker } from '@faker-js/faker'


describe("Script", () => {

    let tag: Script;

    beforeEach(() => {
        tag = new Script();
    });

    it("should set tag name as script", () => {
        expect(tag.tagName).toBe("script");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"async": faker.lorem.word(),
			"crossorigin": faker.lorem.word(),
			"defer": faker.lorem.word(),
			"integrity": faker.lorem.word(),
			"language": faker.lorem.word(),
			"referrerpolicy": faker.lorem.word(),
			"src": faker.lorem.word(),
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

        tag = Script.withAttributes(attr);
        
        expect(tag.getAttr("async")).toBe(attr["async"]);
		expect(tag.getAttr("crossorigin")).toBe(attr["crossorigin"]);
		expect(tag.getAttr("defer")).toBe(attr["defer"]);
		expect(tag.getAttr("integrity")).toBe(attr["integrity"]);
		expect(tag.getAttr("language")).toBe(attr["language"]);
		expect(tag.getAttr("referrerpolicy")).toBe(attr["referrerpolicy"]);
		expect(tag.getAttr("src")).toBe(attr["src"]);
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

    it("should set async attribute", () => {
        const value = faker.lorem.word();
        tag.async(value);
        expect(tag.getAttr("async")).toBe(value);
    });

	it("should set crossorigin attribute", () => {
        const value = faker.lorem.word();
        tag.crossorigin(value);
        expect(tag.getAttr("crossorigin")).toBe(value);
    });

	it("should set defer attribute", () => {
        const value = faker.lorem.word();
        tag.defer(value);
        expect(tag.getAttr("defer")).toBe(value);
    });

	it("should set integrity attribute", () => {
        const value = faker.lorem.word();
        tag.integrity(value);
        expect(tag.getAttr("integrity")).toBe(value);
    });

	it("should set language attribute", () => {
        const value = faker.lorem.word();
        tag.language(value);
        expect(tag.getAttr("language")).toBe(value);
    });

	it("should set referrerpolicy attribute", () => {
        const value = faker.lorem.word();
        tag.referrerpolicy(value);
        expect(tag.getAttr("referrerpolicy")).toBe(value);
    });

	it("should set src attribute", () => {
        const value = faker.lorem.word();
        tag.src(value);
        expect(tag.getAttr("src")).toBe(value);
    });

	it("should set type attribute", () => {
        const value = faker.lorem.word();
        tag.type(value);
        expect(tag.getAttr("type")).toBe(value);
    });

	
});
