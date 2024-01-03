
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu
class Menu extends Tag {
    constructor(children?: childrenType) {
        super("menu", children);
    }
    
    type(value?: string) {
        if(value) this.setAttr("type", value);
    }

}

export default Menu;
    