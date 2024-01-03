
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dir
class Dir extends UnattributedTag {
    constructor(children?: childrenType) {
        super("dir", children);
    }
}

export default Dir;
