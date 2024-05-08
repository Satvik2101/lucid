import Iframe from "../../tags/Iframe";
import { faker } from '@faker-js/faker'


describe("Iframe", () => {

    let tag: Iframe;

    beforeEach(() => {
        tag = new Iframe();
    });

    it("should set tag name as iframe", () => {
        expect(tag.tagName).toBe("iframe");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"align": faker.lorem.word(),
			"allow": faker.lorem.word(),
			"csp": faker.lorem.word(),
			"height": faker.lorem.word(),
			"loading": faker.lorem.word(),
			"name": faker.lorem.word(),
			"referrerpolicy": faker.lorem.word(),
			"sandbox": faker.lorem.word(),
			"src": faker.lorem.word(),
			"srcdoc": faker.lorem.word(),
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

        tag = Iframe.withAttributes(attr);
        
        expect(tag.getAttr("align")).toBe(attr["align"]);
		expect(tag.getAttr("allow")).toBe(attr["allow"]);
		expect(tag.getAttr("csp")).toBe(attr["csp"]);
		expect(tag.getAttr("height")).toBe(attr["height"]);
		expect(tag.getAttr("loading")).toBe(attr["loading"]);
		expect(tag.getAttr("name")).toBe(attr["name"]);
		expect(tag.getAttr("referrerpolicy")).toBe(attr["referrerpolicy"]);
		expect(tag.getAttr("sandbox")).toBe(attr["sandbox"]);
		expect(tag.getAttr("src")).toBe(attr["src"]);
		expect(tag.getAttr("srcdoc")).toBe(attr["srcdoc"]);
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

    it("should set align attribute", () => {
        const value = faker.lorem.word();
        tag.align(value);
        expect(tag.getAttr("align")).toBe(value);
    });

	it("should set allow attribute", () => {
        const value = faker.lorem.word();
        tag.allow(value);
        expect(tag.getAttr("allow")).toBe(value);
    });

	it("should set csp attribute", () => {
        const value = faker.lorem.word();
        tag.csp(value);
        expect(tag.getAttr("csp")).toBe(value);
    });

	it("should set height attribute", () => {
        const value = faker.lorem.word();
        tag.height(value);
        expect(tag.getAttr("height")).toBe(value);
    });

	it("should set loading attribute", () => {
        const value = faker.lorem.word();
        tag.loading(value);
        expect(tag.getAttr("loading")).toBe(value);
    });

	it("should set name attribute", () => {
        const value = faker.lorem.word();
        tag.name(value);
        expect(tag.getAttr("name")).toBe(value);
    });

	it("should set referrerpolicy attribute", () => {
        const value = faker.lorem.word();
        tag.referrerpolicy(value);
        expect(tag.getAttr("referrerpolicy")).toBe(value);
    });

	it("should set sandbox attribute", () => {
        const value = faker.lorem.word();
        tag.sandbox(value);
        expect(tag.getAttr("sandbox")).toBe(value);
    });

	it("should set src attribute", () => {
        const value = faker.lorem.word();
        tag.src(value);
        expect(tag.getAttr("src")).toBe(value);
    });

	it("should set srcdoc attribute", () => {
        const value = faker.lorem.word();
        tag.srcdoc(value);
        expect(tag.getAttr("srcdoc")).toBe(value);
    });

	it("should set width attribute", () => {
        const value = faker.lorem.word();
        tag.width(value);
        expect(tag.getAttr("width")).toBe(value);
    });

	
});
