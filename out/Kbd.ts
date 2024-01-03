
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd
class Kbd extends UnattributedTag {
    constructor(children?: childrenType) {
        super("kbd", children);
    }
}

export default Kbd;
    