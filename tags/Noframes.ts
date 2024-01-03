
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noframes
class Noframes extends UnattributedTag {
    constructor(children?: childrenType) {
        super("noframes", children);
    }
}

export default Noframes;
