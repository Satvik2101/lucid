"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Tag_1 = require("../Tag");
const TechStack_1 = __importDefault(require("../global/TechStack"));
const UnorderedList_1 = __importDefault(require("../global/Tags/UnorderedList"));
class WorkexpPoints extends Div_1.default {
    constructor(props) {
        super({
            divClass: "workexp_points", children: [
                new UnorderedList_1.default(props.points),
                new TechStack_1.default(props.techstack)
            ]
        });
    }
}
class WorkexpCard extends Div_1.default {
    constructor(props, idx) {
        var workexpCardClass = "workexp_card";
        if (idx == 0)
            workexpCardClass += " workexp_card_selected";
        super({
            divClass: workexpCardClass, children: [
                new Tag_1.Tag("h3", { class: "workexp_title" }, props.company),
                new Tag_1.Tag("h4", { class: "workexp_subtitle" }, props.role),
                new Tag_1.Tag("h4", { class: "workexp_timespan" }, props.start + " - " + props.end),
                new WorkexpPoints({ points: props.points, techstack: props.techstack })
            ]
        });
    }
}
exports.default = WorkexpCard;
