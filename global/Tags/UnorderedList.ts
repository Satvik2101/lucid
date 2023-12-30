import { ClassIDTag, Tag } from "../../Tag";

class UnorderedList extends ClassIDTag {
    constructor(items: string[], listClass?: string, id?: string) {

        super("ul", items.map((item) => new Tag("li", {}, [item])), listClass, id);
    }
}

export default UnorderedList;