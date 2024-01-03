
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/slot
class Slot extends UnattributedTag {
    constructor(children?: childrenType) {
        super("slot", children);
    }
}

export default Slot;
