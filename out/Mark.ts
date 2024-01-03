
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
class Mark extends UnattributedTag {
    constructor(children?: childrenType) {
        super("mark", children);
    }
}

export default Mark;
    