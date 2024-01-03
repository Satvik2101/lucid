
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/i
class I extends UnattributedTag {
    constructor(children?: childrenType) {
        super("i", children);
    }
}

export default I;
