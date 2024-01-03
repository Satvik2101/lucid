
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/tt
class Tt extends UnattributedTag {
    constructor(children?: childrenType) {
        super("tt", children);
    }
}

export default Tt;
