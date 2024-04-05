import Li from "../tags/Li";
import Ul from "../tags/Ul";

class SimpleUnorderedList extends Ul {
    constructor(items: string[]) {
        super(items.map(item => new Li(item)));
    }
}

export default SimpleUnorderedList;