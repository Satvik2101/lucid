
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure
class Figure extends UnattributedTag {
    constructor(children?: childrenType) {
        super("figure", children);
    }
}

export default Figure;
    