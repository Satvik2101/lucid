
import { Tag,childrenType } from "../utils/Tag";

//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter
class Meter extends Tag {
    constructor(children?: childrenType) {
        super("meter", children);
    }
    
    form(value?: string) {
        if(value) this.setAttr("form", value);
    }

    high(value?: string) {
        if(value) this.setAttr("high", value);
    }

    low(value?: string) {
        if(value) this.setAttr("low", value);
    }

    max(value?: string) {
        if(value) this.setAttr("max", value);
    }

    min(value?: string) {
        if(value) this.setAttr("min", value);
    }

    optimum(value?: string) {
        if(value) this.setAttr("optimum", value);
    }

    value(value?: string) {
        if(value) this.setAttr("value", value);
    }

}

export default Meter;
    