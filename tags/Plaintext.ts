
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext
class Plaintext extends UnattributedTag {
    constructor(children?: childrenType) {
        super("plaintext", children);
    }
}

export default Plaintext;
