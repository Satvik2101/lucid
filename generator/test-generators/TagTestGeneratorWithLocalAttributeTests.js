const TagTestGenerator = require("./TagTestGenerator")

class TagTestGeneratorWithLocalAttributeTests extends TagTestGenerator {
    constructor(tagName, className, allAttributes, localAttributes) {
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
            tests += this.generateLocalAttributeTest(attr);
        }
        return tests;
    }

    generateLocalAttributeTest(attr) {

        const functionName = this.replaceDashWithUnderscore(attr);
        return `it("should set ${attr} attribute", () => {
        const value = faker.lorem.word();
        tag.${functionName}(value);
        expect(tag.getAttr("${attr}")).toBe(value);
    });\n\n\t`
    }

    replaceDashWithUnderscore(str) {
        return str.replace(/-/g, "_");
    }

}

module.exports = TagTestGeneratorWithLocalAttributeTests;