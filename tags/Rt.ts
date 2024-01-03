
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
class Rt extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rt", children);
    }
}

export default Rt;
