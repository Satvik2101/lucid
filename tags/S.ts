
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/s
class S extends UnattributedTag {
    constructor(children?: childrenType) {
        super("s", children);
    }
}

export default S;
