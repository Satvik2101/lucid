import { Tag } from "../../Tag";

class UnorderedList extends Tag {
    constructor(items: string[]) {

        super("ul", {}, items.map((item) => new Tag("li", {}, [item])));
    }
}

export default UnorderedList;