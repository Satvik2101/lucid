
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/xmp
class Xmp extends UnattributedTag {
    constructor(children?: childrenType) {
        super("xmp", children);
    }
}

export default Xmp;
