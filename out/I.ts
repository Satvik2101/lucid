
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
class I extends UnattributedTag {
    constructor(children?: childrenType) {
        super("i", children);
    }
}

export default I;
    