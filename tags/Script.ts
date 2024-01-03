import { Tag } from "./Tag";

class Script extends Tag {
    constructor(src: string) {
        super("script", [], { src: src });
    }

    src(value: string) {
        this.setAttr("src", value);
    }
}

export default Script;