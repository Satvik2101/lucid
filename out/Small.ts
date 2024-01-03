
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
class Small extends UnattributedTag {
    constructor(children?: childrenType) {
        super("small", children);
    }
}

export default Small;
    