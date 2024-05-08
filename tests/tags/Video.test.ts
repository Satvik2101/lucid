import Video from "../../tags/Video";
import { faker } from '@faker-js/faker'


describe("Video", () => {

    let tag: Video;

    beforeEach(() => {
        tag = new Video();
    });

    it("should set tag name as video", () => {
        expect(tag.tagName).toBe("video");
    });

    it("should set all attributes in factory constructor", () => {
        const attr = {
			"autoplay": faker.lorem.word(),
			"buffered": faker.lorem.word(),
			"controls": faker.lorem.word(),
			"crossorigin": faker.lorem.word(),
			"height": faker.lorem.word(),
			"loop": faker.lorem.word(),
			"muted": faker.lorem.word(),
			"playsinline": faker.lorem.word(),
			"poster": faker.lorem.word(),
			"preload": faker.lorem.word(),
			"src": faker.lorem.word(),
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

        tag = Video.withAttributes(attr);
        
        expect(tag.getAttr("autoplay")).toBe(attr["autoplay"]);
		expect(tag.getAttr("buffered")).toBe(attr["buffered"]);
		expect(tag.getAttr("controls")).toBe(attr["controls"]);
		expect(tag.getAttr("crossorigin")).toBe(attr["crossorigin"]);
		expect(tag.getAttr("height")).toBe(attr["height"]);
		expect(tag.getAttr("loop")).toBe(attr["loop"]);
		expect(tag.getAttr("muted")).toBe(attr["muted"]);
		expect(tag.getAttr("playsinline")).toBe(attr["playsinline"]);
		expect(tag.getAttr("poster")).toBe(attr["poster"]);
		expect(tag.getAttr("preload")).toBe(attr["preload"]);
		expect(tag.getAttr("src")).toBe(attr["src"]);
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
