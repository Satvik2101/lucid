
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div
class Div extends UnattributedTag {
    constructor(children?: childrenType) {
        super("div", children);
    }
}

export default Div;
    