
import { VoidTag } from "../tags/Tag";


//https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input
class Input extends VoidTag {
    constructor() {
        super("input");
    }

    
    accept(value: string) {
        this.setAttr("accept", value);
    }

    alt(value: string) {
        this.setAttr("alt", value);
    }

    autocomplete(value: string) {
        this.setAttr("autocomplete", value);
    }

    capture(value: string) {
        this.setAttr("capture", value);
    }

    checked(value: string) {
        this.setAttr("checked", value);
    }

    dirname(value: string) {
        this.setAttr("dirname", value);
    }

    disabled(value: string) {
        this.setAttr("disabled", value);
    }

    form(value: string) {
        this.setAttr("form", value);
    }

    formaction(value: string) {
        this.setAttr("formaction", value);
    }

    formenctype(value: string) {
        this.setAttr("formenctype", value);
    }

    formmethod(value: string) {
        this.setAttr("formmethod", value);
    }

    formnovalidate(value: string) {
        this.setAttr("formnovalidate", value);
    }

    formtarget(value: string) {
        this.setAttr("formtarget", value);
    }

    height(value: string) {
        this.setAttr("height", value);
    }

    list(value: string) {
        this.setAttr("list", value);
    }

    max(value: string) {
        this.setAttr("max", value);
    }

    maxlength(value: string) {
        this.setAttr("maxlength", value);
    }

    minlength(value: string) {
        this.setAttr("minlength", value);
    }

    min(value: string) {
        this.setAttr("min", value);
    }

    multiple(value: string) {
        this.setAttr("multiple", value);
    }

    name(value: string) {
        this.setAttr("name", value);
    }

    pattern(value: string) {
        this.setAttr("pattern", value);
    }

    placeholder(value: string) {
        this.setAttr("placeholder", value);
    }

    readonly(value: string) {
        this.setAttr("readonly", value);
    }

    required(value: string) {
        this.setAttr("required", value);
    }

    size(value: string) {
        this.setAttr("size", value);
    }

    src(value: string) {
        this.setAttr("src", value);
    }

    step(value: string) {
        this.setAttr("step", value);
    }

    type(value: string) {
        this.setAttr("type", value);
    }

    usemap(value: string) {
        this.setAttr("usemap", value);
    }

    value(value: string) {
        this.setAttr("value", value);
    }

    width(value: string) {
        this.setAttr("width", value);
    }
}
    
export default Input;