
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/center
class Center extends UnattributedTag {
    constructor(children?: childrenType) {
        super("center", children);
    }
}

export default Center;
