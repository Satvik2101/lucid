
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/rb
class Rb extends UnattributedTag {
    constructor(children?: childrenType) {
        super("rb", children);
    }
}

export default Rb;
