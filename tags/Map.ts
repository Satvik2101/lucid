
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/map
class Map extends Tag {
    constructor(children?: childrenType) {
        super("map", children);
    }
    
    name(value?: string) {
        if(value) this.setAttr("name", value);
    }

}

export default Map;
    