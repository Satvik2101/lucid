import Input from "../../tags/Input";
import { faker } from '@faker-js/faker'


describe("Input", () => {

    let tag: Input;

    beforeEach(() => {
        tag = new Input();
    });

    it("should set tag name as input", () => {
        expect(tag.tagName).toBe("input");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"accept": faker.lorem.word(),
			"alt": faker.lorem.word(),
			"autocomplete": faker.lorem.word(),
			"capture": faker.lorem.word(),
			"checked": faker.lorem.word(),
			"dirname": faker.lorem.word(),
			"disabled": faker.lorem.word(),
			"form": faker.lorem.word(),
			"formaction": faker.lorem.word(),
			"formenctype": faker.lorem.word(),
			"formmethod": faker.lorem.word(),
			"formnovalidate": faker.lorem.word(),
			"formtarget": faker.lorem.word(),
			"height": faker.lorem.word(),
			"list": faker.lorem.word(),
			"max": faker.lorem.word(),
			"maxlength": faker.lorem.word(),
			"minlength": faker.lorem.word(),
			"min": faker.lorem.word(),
			"multiple": faker.lorem.word(),
			"name": faker.lorem.word(),
			"pattern": faker.lorem.word(),
			"placeholder": faker.lorem.word(),
			"readonly": faker.lorem.word(),
			"required": faker.lorem.word(),
			"size": faker.lorem.word(),
			"src": faker.lorem.word(),
			"step": faker.lorem.word(),
			"type": faker.lorem.word(),
			"usemap": faker.lorem.word(),
			"value": faker.lorem.word(),
			"width": faker.lorem.word(),
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

        tag = Input.withAttributes(attr);
        
        expect(tag.getAttr("accept")).toBe(attr["accept"]);
		expect(tag.getAttr("alt")).toBe(attr["alt"]);
		expect(tag.getAttr("autocomplete")).toBe(attr["autocomplete"]);
		expect(tag.getAttr("capture")).toBe(attr["capture"]);
		expect(tag.getAttr("checked")).toBe(attr["checked"]);
		expect(tag.getAttr("dirname")).toBe(attr["dirname"]);
		expect(tag.getAttr("disabled")).toBe(attr["disabled"]);
		expect(tag.getAttr("form")).toBe(attr["form"]);
		expect(tag.getAttr("formaction")).toBe(attr["formaction"]);
		expect(tag.getAttr("formenctype")).toBe(attr["formenctype"]);
		expect(tag.getAttr("formmethod")).toBe(attr["formmethod"]);
		expect(tag.getAttr("formnovalidate")).toBe(attr["formnovalidate"]);
		expect(tag.getAttr("formtarget")).toBe(attr["formtarget"]);
		expect(tag.getAttr("height")).toBe(attr["height"]);
		expect(tag.getAttr("list")).toBe(attr["list"]);
		expect(tag.getAttr("max")).toBe(attr["max"]);
		expect(tag.getAttr("maxlength")).toBe(attr["maxlength"]);
		expect(tag.getAttr("minlength")).toBe(attr["minlength"]);
		expect(tag.getAttr("min")).toBe(attr["min"]);
		expect(tag.getAttr("multiple")).toBe(attr["multiple"]);
		expect(tag.getAttr("name")).toBe(attr["name"]);
		expect(tag.getAttr("pattern")).toBe(attr["pattern"]);
		expect(tag.getAttr("placeholder")).toBe(attr["placeholder"]);
		expect(tag.getAttr("readonly")).toBe(attr["readonly"]);
		expect(tag.getAttr("required")).toBe(attr["required"]);
		expect(tag.getAttr("size")).toBe(attr["size"]);
		expect(tag.getAttr("src")).toBe(attr["src"]);
		expect(tag.getAttr("step")).toBe(attr["step"]);
		expect(tag.getAttr("type")).toBe(attr["type"]);
		expect(tag.getAttr("usemap")).toBe(attr["usemap"]);
		expect(tag.getAttr("value")).toBe(attr["value"]);
		expect(tag.getAttr("width")).toBe(attr["width"]);
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
