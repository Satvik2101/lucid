
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/frame
class Frame extends UnattributedTag {
    constructor(children?: childrenType) {
        super("frame", children);
    }
}

export default Frame;
