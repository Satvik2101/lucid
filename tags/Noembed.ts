
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/noembed
class Noembed extends UnattributedTag {
    constructor(children?: childrenType) {
        super("noembed", children);
    }
}

export default Noembed;
