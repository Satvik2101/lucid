import Select from "../../tags/Select";
import { faker } from '@faker-js/faker'


describe("Select", () => {

    let tag: Select;

    beforeEach(() => {
        tag = new Select();
    });

    it("should set tag name as select", () => {
        expect(tag.tagName).toBe("select");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"autocomplete": faker.lorem.word(),
			"disabled": faker.lorem.word(),
			"form": faker.lorem.word(),
			"multiple": faker.lorem.word(),
			"name": faker.lorem.word(),
			"required": faker.lorem.word(),
			"size": faker.lorem.word(),
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

        tag = Select.withAttributes(attr);
        
        expect(tag.getAttr("autocomplete")).toBe(attr["autocomplete"]);
		expect(tag.getAttr("disabled")).toBe(attr["disabled"]);
		expect(tag.getAttr("form")).toBe(attr["form"]);
		expect(tag.getAttr("multiple")).toBe(attr["multiple"]);
		expect(tag.getAttr("name")).toBe(attr["name"]);
		expect(tag.getAttr("required")).toBe(attr["required"]);
		expect(tag.getAttr("size")).toBe(attr["size"]);
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
