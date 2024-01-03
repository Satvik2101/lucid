
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
class Figure extends UnattributedTag {
    constructor(children?: childrenType) {
        super("figure", children);
    }
}

export default Figure;
