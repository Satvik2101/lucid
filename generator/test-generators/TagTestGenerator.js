class TagTestGenerator {
    constructor(tagName, className, attributes) {
        this.tagName = tagName;
        this.className = className;
        this.attributes = attributes;
    }

    generateTest() {
        const out =
            `${this.getImportTagStatement()}
${this.getImportFakerStatement()}


describe("${this.className}", () => {

    let tag: ${this.className};

    ${this.getBeforeEach()}

    ${this.getTagNameTest()}

    ${this.getFactoryConstructorTest()}
});
`
        return out;
    }

    getImportTagStatement() {
        return `import ${this.className} from "../../tags/${this.className}";`;
    }

    getImportFakerStatement() {
        return `import { faker } from '@faker-js/faker'`;
    }

    getBeforeEach() {
        return `beforeEach(() => {
        tag = new ${this.className}();
    });`
    }

    getTagNameTest() {
        return `it("should set tag name as ${this.tagName}", () => {
        expect(tag.tagName).toBe("${this.tagName}");
    });`
    }

    getFactoryConstructorTest() {
        return `it("should set all attributes in factory constructor", () => {
        ${this.getAttributeArgument()}

        tag = ${this.className}.withAttributes(attr);
        
        ${this.getExpectStatements()}
    });`
    }

    getAttributeArgument() {
        let attrArg = `const attr = {\n`;
        for (let attr of this.attributes) {
            attrArg += `\t\t\t"${attr}": faker.lorem.word(),\n`
        }
        attrArg += `\t\t};`
        return attrArg;
    }

    getExpectStatements() {
        let expectStatements = "";
        for (let attr of this.attributes) {
            expectStatements += `expect(tag.getAttr("${attr}")).toBe(attr["${attr}"]);\n\t\t`
        }
        return expectStatements;
    }
}

module.exports = TagTestGenerator;

/*
import Abbr from "../../tags/Abbr";
import { faker } from '@faker-js/faker'


describe('oAbbr test', () => {

    let tag: Abbr;

    beforeEach(() => {
        tag = new Abbr();
    });

    test('tag name should be Abbr', () => {
        expect(tag.tagName).toBe("abbr");
    });

    test('factory constructor test, all attributes should be set properly', () => {
        const attr = {
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

        tag = Abbr.withAttributes(attr);

        expect(tag.getAttr("accesskey")).toEqual(attr["accesskey"]);
        expect(tag.getAttr("autocapitalize")).toEqual(attr["autocapitalize"]);
        expect(tag.getAttr("class")).toEqual(attr["class"]);
        expect(tag.getAttr("contenteditable")).toEqual(attr["contenteditable"]);
        expect(tag.getAttr("contextmenu")).toEqual(attr["contextmenu"]);
        expect(tag.getAttr("dir")).toEqual(attr["dir"]);
        expect(tag.getAttr("draggable")).toEqual(attr["draggable"]);
        expect(tag.getAttr("hidden")).toEqual(attr["hidden"]);
        expect(tag.getAttr("id")).toEqual(attr["id"]);
        expect(tag.getAttr("itemprop")).toEqual(attr["itemprop"]);
        expect(tag.getAttr("lang")).toEqual(attr["lang"]);
        expect(tag.getAttr("role")).toEqual(attr["role"]);
        expect(tag.getAttr("slot")).toEqual(attr["slot"]);
        expect(tag.getAttr("spellcheck")).toEqual(attr["spellcheck"]);
        expect(tag.getAttr("style")).toEqual(attr["style"]);
        expect(tag.getAttr("tabindex")).toEqual(attr["tabindex"]);
        expect(tag.getAttr("title")).toEqual(attr["title"]);
        expect(tag.getAttr("translate")).toEqual(attr["translate"]);
    })
});
*/