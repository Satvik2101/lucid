"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Button_1 = __importDefault(require("../tags/Button"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
class ChooserItem extends EnhancedDiv_1.default {
    constructor(companyShortName, idx) {
        var chooserClass = "workexp_chooser_item";
        if (idx == 0)
            chooserClass += " workexp_chooser_item_selected";
        super({ class: chooserClass, id: `workexp_chooser_item_${idx + 1}`, children: new Button_1.default(companyShortName) });
    }
}
class Chooser extends EnhancedDiv_1.default {
    constructor(props) {
        super({ id: "workexp_chooser", children: props.map((workexp, idx) => new ChooserItem(workexp.shortName, idx)) });
    }
}
exports.default = Chooser;
