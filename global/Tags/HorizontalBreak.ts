import { SelfClosingTag } from "../../Tag";

class HorizontalBreak extends SelfClosingTag {
    constructor() {
        super("br", {});
    }
}

export default HorizontalBreak;