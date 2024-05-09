class TagTestGenerator {
    tagName: string;
    className: string;
    attributes: string[];
    constructor(tagName: string, className: string, attributes: string[]) {
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

export default TagTestGenerator;