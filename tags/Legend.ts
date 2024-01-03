
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend
class Legend extends UnattributedTag {
    constructor(children?: childrenType) {
        super("legend", children);
    }
}

export default Legend;
