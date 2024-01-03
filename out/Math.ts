
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/math
class Math extends UnattributedTag {
    constructor(children?: childrenType) {
        super("math", children);
    }
}

export default Math;
    