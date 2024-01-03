
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed
class Noembed extends UnattributedTag {
    constructor(children?: childrenType) {
        super("noembed", children);
    }
}

export default Noembed;
    