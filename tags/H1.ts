
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h1
class H1 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h1", children);
    }
}

export default H1;
