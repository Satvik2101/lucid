
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frameset
class Frameset extends UnattributedTag {
    constructor(children?: childrenType) {
        super("frameset", children);
    }
}

export default Frameset;
    