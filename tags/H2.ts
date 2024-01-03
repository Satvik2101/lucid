
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/h2
class H2 extends UnattributedTag {
    constructor(children?: childrenType) {
        super("h2", children);
    }
}

export default H2;
