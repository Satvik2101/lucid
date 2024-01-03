
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code
class Code extends UnattributedTag {
    constructor(children?: childrenType) {
        super("code", children);
    }
}

export default Code;
