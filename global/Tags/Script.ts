import { Tag } from "../../Tag";

class Script extends Tag {
    constructor(src: string) {
        super("script", { src }, []);
    }
}

export default Script;