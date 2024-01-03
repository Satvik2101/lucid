import Li from "../tags/Li";
import Ol from "../tags/Ol";
import Ul from "../tags/Ul";
import { Tag, childrenType } from "./Tag";
import { UnattributedTag } from "./UnattributedTag";



class SimpleUnorderedList extends Ul {
    constructor(items: string[]) {
        super(items.map(item => new Li(item)));
    }
}


class SimpleOrderedList extends Ol {
    constructor(items: string[]) {
        super(items.map(item => new Li(item)));
    }
}
export { SimpleUnorderedList, SimpleOrderedList };