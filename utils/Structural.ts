import { childrenType } from "./Tag";
import { UnattributedTag } from "./UnattributedTag";

//Tags that provide structure to a page.

class Footer extends UnattributedTag {
    constructor(children?: childrenType) {
        super("footer", children);
    }
}

class Header extends UnattributedTag {
    constructor(children?: childrenType) {
        super("header", children);
    }
}

class Main extends UnattributedTag {
    constructor(children?: childrenType) {
        super("main", children);
    }
}

class Section extends UnattributedTag {
    constructor(children?: childrenType) {
        super("section", children);
    }
}

class Nav extends UnattributedTag {
    constructor(children?: childrenType) {
        super("nav", children);
    }
}


export { Footer, Header, Main, Section, Nav }
