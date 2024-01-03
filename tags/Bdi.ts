
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/bdi
class Bdi extends UnattributedTag {
    constructor(children?: childrenType) {
        super("bdi", children);
    }
}

export default Bdi;
