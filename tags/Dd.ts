
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dd
class Dd extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dd", children);
    }
}

export default Dd;
