
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset
class Frameset extends UnattributedTag {
    constructor(children?: childrenType) {
        super("frameset", children);
    }
}

export default Frameset;
