"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Tag_1 = require("../Tag");
const Div_1 = __importDefault(require("../Div"));
class ChooserItem extends Div_1.default {
    constructor(companyShortName, idx) {
        var chooserClass = "workexp_chooser_item";
        if (idx == 0)
            chooserClass += " workexp_chooser_item_selected";
        super({ divClass: chooserClass, id: `workexp_chooser_item_${idx + 1}`, children: new Tag_1.Tag("button", {}, companyShortName) });
    }
}
class Chooser extends Div_1.default {
    constructor(props) {
        super({ id: "workexp_chooser", children: props.map((workexp, idx) => new ChooserItem(workexp.shortName, idx)) });
    }
}
exports.default = Chooser;
