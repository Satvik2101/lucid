import TagTestGenerator from "./TagTestGenerator";

class TagTestGeneratorWithLocalAttributeTests extends TagTestGenerator {

    localAttributes: string[];

    constructor(tagName: string, className: string, allAttributes: string[], localAttributes: string[]) {
        super(tagName, className, allAttributes);
        this.localAttributes = localAttributes;
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

    ${this.getLocalAttributeTests()}
});
`
        return out;
    }

    getLocalAttributeTests() {

        let tests = "";
        for (let attr of this.localAttributes) {
            tests += this.getSingleLocalAttributeTest(attr);
        }
        return tests;
    }

    getSingleLocalAttributeTest(attr: string) {

        const functionName = this.replaceDashWithUnderscore(attr);
        return `it("should set ${attr} attribute", () => {
        const value = faker.lorem.word();
        tag.${functionName}(value);
        expect(tag.getAttr("${attr}")).toBe(value);
    });\n\n\t`
    }

    replaceDashWithUnderscore(str: string) {
        return str.replace(/-/g, "_");
    }

}

export default TagTestGeneratorWithLocalAttributeTests;