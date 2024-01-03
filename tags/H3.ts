
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h3
class H3 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h3", children);
    }
}

export default H3;
