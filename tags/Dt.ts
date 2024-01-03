
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dt
class Dt extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dt", children);
    }
}

export default Dt;
