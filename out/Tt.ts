
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt
class Tt extends UnattributedTag {
    constructor(children?: childrenType) {
        super("tt", children);
    }
}

export default Tt;
    