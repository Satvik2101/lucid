
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rt
class Rt extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rt", children);
    }
}

export default Rt;
    