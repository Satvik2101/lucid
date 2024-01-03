
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/address
class Address extends UnattributedTag {
    constructor(children?: childrenType) {
        super("address", children);
    }
}

export default Address;
