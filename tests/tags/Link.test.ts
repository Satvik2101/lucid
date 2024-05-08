import Link from "../../tags/Link";
import { faker } from '@faker-js/faker'


describe("Link", () => {

    let tag: Link;

    beforeEach(() => {
        tag = new Link();
    });

    it("should set tag name as link", () => {
        expect(tag.tagName).toBe("link");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"crossorigin": faker.lorem.word(),
			"href": faker.lorem.word(),
			"hreflang": faker.lorem.word(),
			"integrity": faker.lorem.word(),
			"media": faker.lorem.word(),
			"referrerpolicy": faker.lorem.word(),
			"rel": faker.lorem.word(),
			"sizes": faker.lorem.word(),
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

        tag = Link.withAttributes(attr);
        
        expect(tag.getAttr("crossorigin")).toBe(attr["crossorigin"]);
		expect(tag.getAttr("href")).toBe(attr["href"]);
		expect(tag.getAttr("hreflang")).toBe(attr["hreflang"]);
		expect(tag.getAttr("integrity")).toBe(attr["integrity"]);
		expect(tag.getAttr("media")).toBe(attr["media"]);
		expect(tag.getAttr("referrerpolicy")).toBe(attr["referrerpolicy"]);
		expect(tag.getAttr("rel")).toBe(attr["rel"]);
		expect(tag.getAttr("sizes")).toBe(attr["sizes"]);
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

    it("should set crossorigin attribute", () => {
        const value = faker.lorem.word();
        tag.crossorigin(value);
        expect(tag.getAttr("crossorigin")).toBe(value);
    });

	it("should set href attribute", () => {
        const value = faker.lorem.word();
        tag.href(value);
        expect(tag.getAttr("href")).toBe(value);
    });

	it("should set hreflang attribute", () => {
        const value = faker.lorem.word();
        tag.hreflang(value);
        expect(tag.getAttr("hreflang")).toBe(value);
    });

	it("should set integrity attribute", () => {
        const value = faker.lorem.word();
        tag.integrity(value);
        expect(tag.getAttr("integrity")).toBe(value);
    });

	it("should set media attribute", () => {
        const value = faker.lorem.word();
        tag.media(value);
        expect(tag.getAttr("media")).toBe(value);
    });

	it("should set referrerpolicy attribute", () => {
        const value = faker.lorem.word();
        tag.referrerpolicy(value);
        expect(tag.getAttr("referrerpolicy")).toBe(value);
    });

	it("should set rel attribute", () => {
        const value = faker.lorem.word();
        tag.rel(value);
        expect(tag.getAttr("rel")).toBe(value);
    });

	it("should set sizes attribute", () => {
        const value = faker.lorem.word();
        tag.sizes(value);
        expect(tag.getAttr("sizes")).toBe(value);
    });

	it("should set type attribute", () => {
        const value = faker.lorem.word();
        tag.type(value);
        expect(tag.getAttr("type")).toBe(value);
    });

	
});
