
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
class Param extends VoidTag {
    constructor() {
        super("param");
    }

    
    name(value: string) {
        this.setAttr("name", value);
    }

    value(value: string) {
        this.setAttr("value", value);
    }
}
    
export default Param;