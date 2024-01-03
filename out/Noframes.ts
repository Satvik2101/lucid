
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes
class Noframes extends UnattributedTag {
    constructor(children?: childrenType) {
        super("noframes", children);
    }
}

export default Noframes;
    