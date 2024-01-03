
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
class Legend extends UnattributedTag {
    constructor(children?: childrenType) {
        super("legend", children);
    }
}

export default Legend;
    