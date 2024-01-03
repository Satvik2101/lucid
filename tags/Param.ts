
import { VoidTag } from "../utils/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/param
class Param extends VoidTag {
    constructor() {
        super("param");
    }

    
    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }
}
    
export default Param;