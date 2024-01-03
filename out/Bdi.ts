
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
class Bdi extends UnattributedTag {
    constructor(children?: childrenType) {
        super("bdi", children);
    }
}

export default Bdi;
    