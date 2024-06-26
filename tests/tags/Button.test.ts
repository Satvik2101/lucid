import Button from "../../tags/Button";
import { faker } from '@faker-js/faker'


describe("Button", () => {

    let tag: Button;

    beforeEach(() => {
        tag = new Button();
    });

    it("should set tag name as button", () => {
        expect(tag.tagName).toBe("button");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"disabled": faker.lorem.word(),
			"form": faker.lorem.word(),
			"formaction": faker.lorem.word(),
			"formenctype": faker.lorem.word(),
			"formmethod": faker.lorem.word(),
			"formnovalidate": faker.lorem.word(),
			"formtarget": faker.lorem.word(),
			"name": faker.lorem.word(),
			"type": faker.lorem.word(),
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

        tag = Button.withAttributes(attr);
        
        expect(tag.getAttr("disabled")).toBe(attr["disabled"]);
		expect(tag.getAttr("form")).toBe(attr["form"]);
		expect(tag.getAttr("formaction")).toBe(attr["formaction"]);
		expect(tag.getAttr("formenctype")).toBe(attr["formenctype"]);
		expect(tag.getAttr("formmethod")).toBe(attr["formmethod"]);
		expect(tag.getAttr("formnovalidate")).toBe(attr["formnovalidate"]);
		expect(tag.getAttr("formtarget")).toBe(attr["formtarget"]);
		expect(tag.getAttr("name")).toBe(attr["name"]);
		expect(tag.getAttr("type")).toBe(attr["type"]);
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

    it("should set disabled attribute", () => {
        const value = faker.lorem.word();
        tag.disabled(value);
        expect(tag.getAttr("disabled")).toBe(value);
    });

	it("should set form attribute", () => {
        const value = faker.lorem.word();
        tag.form(value);
        expect(tag.getAttr("form")).toBe(value);
    });

	it("should set formaction attribute", () => {
        const value = faker.lorem.word();
        tag.formaction(value);
        expect(tag.getAttr("formaction")).toBe(value);
    });

	it("should set formenctype attribute", () => {
        const value = faker.lorem.word();
        tag.formenctype(value);
        expect(tag.getAttr("formenctype")).toBe(value);
    });

	it("should set formmethod attribute", () => {
        const value = faker.lorem.word();
        tag.formmethod(value);
        expect(tag.getAttr("formmethod")).toBe(value);
    });

	it("should set formnovalidate attribute", () => {
        const value = faker.lorem.word();
        tag.formnovalidate(value);
        expect(tag.getAttr("formnovalidate")).toBe(value);
    });

	it("should set formtarget attribute", () => {
        const value = faker.lorem.word();
        tag.formtarget(value);
        expect(tag.getAttr("formtarget")).toBe(value);
    });

	it("should set name attribute", () => {
        const value = faker.lorem.word();
        tag.name(value);
        expect(tag.getAttr("name")).toBe(value);
    });

	it("should set type attribute", () => {
        const value = faker.lorem.word();
        tag.type(value);
        expect(tag.getAttr("type")).toBe(value);
    });

	it("should set value attribute", () => {
        const value = faker.lorem.word();
        tag.value(value);
        expect(tag.getAttr("value")).toBe(value);
    });

	
});
