
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/summary
class Summary extends UnattributedTag {
    constructor(children?: childrenType) {
        super("summary", children);
    }
}

export default Summary;
    