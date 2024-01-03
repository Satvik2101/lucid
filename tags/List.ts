import { Tag, childrenType } from "./Tag";
import { UnattributedTag } from "./UnattributedTag";

class ListItem extends UnattributedTag {
    constructor(children?: childrenType) {
        super("li", children);
    }

}

class UnorderedList extends UnattributedTag {
    constructor(children?: childrenType) {

        super(
            "ul",
            children,
        );
    }
}

class SimpleUnorderedList extends UnorderedList {
    constructor(items: string[]) {
        super(items.map(item => new ListItem(item)));
    }
}


class OrderedList extends UnattributedTag {
    constructor(children?: childrenType) {

        super(
            "ol",
            children,
        );
    }
}

class SimpleOrderedList extends OrderedList {
    constructor(items: string[]) {
        super(items.map(item => new ListItem(item)));
    }
}
export { ListItem, UnorderedList, SimpleUnorderedList, OrderedList, SimpleOrderedList };