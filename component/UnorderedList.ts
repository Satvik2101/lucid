import { Tag } from "../Tag";

class UnorderedList extends Tag{
    constructor(props: { items: string[] }) {
        var unorderedListBody = "";
        for (var i = 0; i < props.items.length; i++) {
            unorderedListBody += new Tag("li", {}, props.items[i]).toString();
        }
        super("ul", {}, unorderedListBody);
    }
}

export default UnorderedList;