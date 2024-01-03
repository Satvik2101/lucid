
import { UnattributedTag } from "../utils/UnattributedTag";
import { childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/main
class Main extends UnattributedTag {
    constructor(children?: childrenType) {
        super("main", children);
    }
}

export default Main;
