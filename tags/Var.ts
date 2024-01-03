
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
class Var extends UnattributedTag {
    constructor(children?: childrenType) {
        super("var", children);
    }
}

export default Var;
