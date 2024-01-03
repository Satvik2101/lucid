
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
class Span extends UnattributedTag {
    constructor(children?: childrenType) {
        super("span", children);
    }
}

export default Span;
