import Area from "../../tags/Area";
import { faker } from '@faker-js/faker'


describe("Area", () => {

    let tag: Area;

    beforeEach(() => {
        tag = new Area();
    });

    it("should set tag name as area", () => {
        expect(tag.tagName).toBe("area");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"alt": faker.lorem.word(),
			"coords": faker.lorem.word(),
			"download": faker.lorem.word(),
			"href": faker.lorem.word(),
			"media": faker.lorem.word(),
			"ping": faker.lorem.word(),
			"referrerpolicy": faker.lorem.word(),
			"rel": faker.lorem.word(),
			"shape": faker.lorem.word(),
			"target": faker.lorem.word(),
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

        tag = Area.withAttributes(attr);
        
        expect(tag.getAttr("alt")).toBe(attr["alt"]);
		expect(tag.getAttr("coords")).toBe(attr["coords"]);
		expect(tag.getAttr("download")).toBe(attr["download"]);
		expect(tag.getAttr("href")).toBe(attr["href"]);
		expect(tag.getAttr("media")).toBe(attr["media"]);
		expect(tag.getAttr("ping")).toBe(attr["ping"]);
		expect(tag.getAttr("referrerpolicy")).toBe(attr["referrerpolicy"]);
		expect(tag.getAttr("rel")).toBe(attr["rel"]);
		expect(tag.getAttr("shape")).toBe(attr["shape"]);
		expect(tag.getAttr("target")).toBe(attr["target"]);
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

    it("should set alt attribute", () => {
        const value = faker.lorem.word();
        tag.alt(value);
        expect(tag.getAttr("alt")).toBe(value);
    });

	it("should set coords attribute", () => {
        const value = faker.lorem.word();
        tag.coords(value);
        expect(tag.getAttr("coords")).toBe(value);
    });

	it("should set download attribute", () => {
        const value = faker.lorem.word();
        tag.download(value);
        expect(tag.getAttr("download")).toBe(value);
    });

	it("should set href attribute", () => {
        const value = faker.lorem.word();
        tag.href(value);
        expect(tag.getAttr("href")).toBe(value);
    });

	it("should set media attribute", () => {
        const value = faker.lorem.word();
        tag.media(value);
        expect(tag.getAttr("media")).toBe(value);
    });

	it("should set ping attribute", () => {
        const value = faker.lorem.word();
        tag.ping(value);
        expect(tag.getAttr("ping")).toBe(value);
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

	it("should set shape attribute", () => {
        const value = faker.lorem.word();
        tag.shape(value);
        expect(tag.getAttr("shape")).toBe(value);
    });

	it("should set target attribute", () => {
        const value = faker.lorem.word();
        tag.target(value);
        expect(tag.getAttr("target")).toBe(value);
    });

	
});
