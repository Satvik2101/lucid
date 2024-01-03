
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
class Address extends UnattributedTag {
    constructor(children?: childrenType) {
        super("address", children);
    }
}

export default Address;
    