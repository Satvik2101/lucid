import Contenteditable from "../../tags/Contenteditable";
import { faker } from '@faker-js/faker'


describe("Contenteditable", () => {

    let tag: Contenteditable;

    beforeEach(() => {
        tag = new Contenteditable();
    });

    it("should set tag name as contenteditable", () => {
        expect(tag.tagName).toBe("contenteditable");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"enterkeyhint": faker.lorem.word(),
			"inputmode": faker.lorem.word(),
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

        tag = Contenteditable.withAttributes(attr);
        
        expect(tag.getAttr("enterkeyhint")).toBe(attr["enterkeyhint"]);
		expect(tag.getAttr("inputmode")).toBe(attr["inputmode"]);
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

    it("should set enterkeyhint attribute", () => {
        const value = faker.lorem.word();
        tag.enterkeyhint(value);
        expect(tag.getAttr("enterkeyhint")).toBe(value);
    });

	it("should set inputmode attribute", () => {
        const value = faker.lorem.word();
        tag.inputmode(value);
        expect(tag.getAttr("inputmode")).toBe(value);
    });

	
});
