
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/mark
class Mark extends UnattributedTag {
    constructor(children?: childrenType) {
        super("mark", children);
    }
}

export default Mark;
