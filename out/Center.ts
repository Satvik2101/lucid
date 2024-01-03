
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center
class Center extends UnattributedTag {
    constructor(children?: childrenType) {
        super("center", children);
    }
}

export default Center;
    