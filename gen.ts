import TagCodeGeneratorFactory from "./generator/TagCodeGeneratorFactory";
import TagRegistry from "./generator/TagRegistry";
import fs from 'fs';

const registry = new TagRegistry();
const tagCodeGeneratorFactory = new TagCodeGeneratorFactory();

const tags = registry.getAllTags();

let classNames: string[] = [];

for (var i = 0; i < tags.length; i++) {
    const tag = tags[i];
    const tagCodeGenerator = tagCodeGeneratorFactory.getTagCodeGenetator(tag);
    const code = tagCodeGenerator.generateClassCode();
    const className = tagCodeGenerator.getClassName();
    fs.writeFileSync(`./tags/${className}.ts`, code);
    const testCode = tagCodeGenerator.generateTestCode();
    fs.writeFileSync(`./tests/tags/${className}.test.ts`, testCode);
    classNames.push(className);
}


function generateIndexFile() {

    //get all files in the /utils directory
    const utils = fs.readdirSync("./utils");
    let indexFileContents = "//utils \n\n";

    for (var i = 0; i < utils.length; i++) {
        var util = utils[i].replace(".ts", "");
        indexFileContents += `export { default as ${util} } from "./utils/${util}";\n`;

    }

    indexFileContents += "\n\n//tags\n\n";

    for (var i = 0; i < classNames.length; i++) {
        var className = classNames[i];
        indexFileContents += `export { default as ${className} } from "./tags/${className}";\n`;
    }

    fs.writeFileSync("./index.ts", indexFileContents);

}

generateIndexFile();