
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
class Code extends UnattributedTag {
    constructor(children?: childrenType) {
        super("code", children);
    }
}

export default Code;
    