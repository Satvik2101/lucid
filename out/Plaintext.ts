
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/plaintext
class Plaintext extends UnattributedTag {
    constructor(children?: childrenType) {
        super("plaintext", children);
    }
}

export default Plaintext;
    