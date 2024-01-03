
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/math
class Math extends UnattributedTag {
    constructor(children?: childrenType) {
        super("math", children);
    }
}

export default Math;
