
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h4
class H4 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h4", children);
    }
}

export default H4;
