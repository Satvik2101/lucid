
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span
class Span extends UnattributedTag {
    constructor(children?: childrenType) {
        super("span", children);
    }
}

export default Span;
    