
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/var
class Var extends UnattributedTag {
    constructor(children?: childrenType) {
        super("var", children);
    }
}

export default Var;
    