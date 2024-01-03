
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame
class Frame extends UnattributedTag {
    constructor(children?: childrenType) {
        super("frame", children);
    }
}

export default Frame;
    