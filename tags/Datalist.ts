
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist
class Datalist extends UnattributedTag {
    constructor(children?: childrenType) {
        super("datalist", children);
    }
}

export default Datalist;
