
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
class Dd extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dd", children);
    }
}

export default Dd;
    