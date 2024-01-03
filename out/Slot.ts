
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
class Slot extends UnattributedTag {
    constructor(children?: childrenType) {
        super("slot", children);
    }
}

export default Slot;
    