
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h5
class H5 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h5", children);
    }
}

export default H5;
    