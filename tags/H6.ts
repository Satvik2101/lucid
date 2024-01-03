
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h6
class H6 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h6", children);
    }
}

export default H6;
