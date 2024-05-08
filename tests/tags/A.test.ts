import A from "../../tags/A";
import { faker } from '@faker-js/faker'


describe("A", () => {

    let tag: A;

    beforeEach(() => {
        tag = new A();
    });

    it("should set tag name as a", () => {
        expect(tag.tagName).toBe("a");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"download": faker.lorem.word(),
			"href": faker.lorem.word(),
			"hreflang": faker.lorem.word(),
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

        tag = A.withAttributes(attr);
        
        expect(tag.getAttr("download")).toBe(attr["download"]);
		expect(tag.getAttr("href")).toBe(attr["href"]);
		expect(tag.getAttr("hreflang")).toBe(attr["hreflang"]);
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
});
