import { ClassIDTag, Tag } from "../../Tag";

class UnorderedList extends ClassIDTag {
    constructor(items: string[], listClass?: string, id?: string) {

        super({
            name: "ul",
            class: listClass,
            id: id,
            children: items.map((item) => new Tag("li", {}, [item]))
        });
    }
}

export default UnorderedList;