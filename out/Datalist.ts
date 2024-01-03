
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
class Datalist extends UnattributedTag {
    constructor(children?: childrenType) {
        super("datalist", children);
    }
}

export default Datalist;
    