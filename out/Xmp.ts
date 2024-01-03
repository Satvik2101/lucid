
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp
class Xmp extends UnattributedTag {
    constructor(children?: childrenType) {
        super("xmp", children);
    }
}

export default Xmp;
    