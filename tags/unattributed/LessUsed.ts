import { childrenType } from "../Tag";
import { UnattributedTag } from "./UnattributedTag";

class Address extends UnattributedTag {
    constructor(children?: childrenType) {
        super("address", children);
    }
}

class Aside extends UnattributedTag {
    constructor(children?: childrenType) {
        super("aside", children);
    }
}

class Article extends UnattributedTag {
    constructor(children?: childrenType) {
        super("article", children);
    }
}


export { Address, Aside, Article }