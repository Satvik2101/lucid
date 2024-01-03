import { childrenType } from "../Tag";
import { UnattributedTag } from "./UnattributedTag";

class HeadingTag extends UnattributedTag {
    constructor(tagName: string, children: childrenType) {
        //tagname should be of the type h[1-6]
        if (!tagName.match(/^h[1-6]$/)) {
            throw new Error("Invalid heading tag name");
        }
        super(tagName, children);
    }
}

class H1 extends HeadingTag {
    constructor(children?: childrenType) {
        super("h1", children);
    }
}

class H2 extends HeadingTag {
    constructor(children?: childrenType) {
        super("h2", children);
    }
}

class H3 extends HeadingTag {
    constructor(children?: childrenType) {
        super("h3", children);
    }
}

class H4 extends HeadingTag {
    constructor(children?: childrenType) {
        super("h4", children);
    }
}

class H5 extends HeadingTag {
    constructor(children?: childrenType) {
        super("h5", children);
    }
}

class H6 extends HeadingTag {
    constructor(children?: childrenType) {
        super("h6", children);
    }
}

export { H1, H2, H3, H4, H5, H6 };