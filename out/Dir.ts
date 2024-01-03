
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir
class Dir extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dir", children);
    }
}

export default Dir;
    