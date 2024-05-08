import Meter from "../../tags/Meter";
import { faker } from '@faker-js/faker'


describe("Meter", () => {

    let tag: Meter;

    beforeEach(() => {
        tag = new Meter();
    });

    it("should set tag name as meter", () => {
        expect(tag.tagName).toBe("meter");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"form": faker.lorem.word(),
			"high": faker.lorem.word(),
			"low": faker.lorem.word(),
			"max": faker.lorem.word(),
			"min": faker.lorem.word(),
			"optimum": faker.lorem.word(),
			"value": faker.lorem.word(),
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

        tag = Meter.withAttributes(attr);
        
        expect(tag.getAttr("form")).toBe(attr["form"]);
		expect(tag.getAttr("high")).toBe(attr["high"]);
		expect(tag.getAttr("low")).toBe(attr["low"]);
		expect(tag.getAttr("max")).toBe(attr["max"]);
		expect(tag.getAttr("min")).toBe(attr["min"]);
		expect(tag.getAttr("optimum")).toBe(attr["optimum"]);
		expect(tag.getAttr("value")).toBe(attr["value"]);
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

    it("should set form attribute", () => {
        const value = faker.lorem.word();
        tag.form(value);
        expect(tag.getAttr("form")).toBe(value);
    });

	it("should set high attribute", () => {
        const value = faker.lorem.word();
        tag.high(value);
        expect(tag.getAttr("high")).toBe(value);
    });

	it("should set low attribute", () => {
        const value = faker.lorem.word();
        tag.low(value);
        expect(tag.getAttr("low")).toBe(value);
    });

	it("should set max attribute", () => {
        const value = faker.lorem.word();
        tag.max(value);
        expect(tag.getAttr("max")).toBe(value);
    });

	it("should set min attribute", () => {
        const value = faker.lorem.word();
        tag.min(value);
        expect(tag.getAttr("min")).toBe(value);
    });

	it("should set optimum attribute", () => {
        const value = faker.lorem.word();
        tag.optimum(value);
        expect(tag.getAttr("optimum")).toBe(value);
    });

	it("should set value attribute", () => {
        const value = faker.lorem.word();
        tag.value(value);
        expect(tag.getAttr("value")).toBe(value);
    });

	
});
