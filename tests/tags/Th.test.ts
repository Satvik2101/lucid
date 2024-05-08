import Th from "../../tags/Th";
import { faker } from '@faker-js/faker'


describe("Th", () => {

    let tag: Th;

    beforeEach(() => {
        tag = new Th();
    });

    it("should set tag name as th", () => {
        expect(tag.tagName).toBe("th");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"align": faker.lorem.word(),
			"background": faker.lorem.word(),
			"bgcolor": faker.lorem.word(),
			"colspan": faker.lorem.word(),
			"headers": faker.lorem.word(),
			"rowspan": faker.lorem.word(),
			"scope": faker.lorem.word(),
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

        tag = Th.withAttributes(attr);
        
        expect(tag.getAttr("align")).toBe(attr["align"]);
		expect(tag.getAttr("background")).toBe(attr["background"]);
		expect(tag.getAttr("bgcolor")).toBe(attr["bgcolor"]);
		expect(tag.getAttr("colspan")).toBe(attr["colspan"]);
		expect(tag.getAttr("headers")).toBe(attr["headers"]);
		expect(tag.getAttr("rowspan")).toBe(attr["rowspan"]);
		expect(tag.getAttr("scope")).toBe(attr["scope"]);
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
