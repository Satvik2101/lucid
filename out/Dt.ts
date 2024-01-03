
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
class Dt extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dt", children);
    }
}

export default Dt;
    