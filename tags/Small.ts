
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/small
class Small extends UnattributedTag {
    constructor(children?: childrenType) {
        super("small", children);
    }
}

export default Small;
