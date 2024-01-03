
import { UnattributedTag } from "../tags/UnattributedTag";
import { childrenType } from "../tags/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
class Main extends UnattributedTag {
    constructor(children?: childrenType) {
        super("main", children);
    }
}

export default Main;
    