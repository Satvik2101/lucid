import Li from "../tags/Li";
import Ol from "../tags/Ol";

class SimpleOrderedList extends Ol {
    constructor(items: string[]) {
        super(items.map(item => new Li(item)));
    }
}

export default SimpleOrderedList;