"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TechStack_1 = __importDefault(require("../global/TechStack"));
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const List_1 = require("../utils/List");
const H3_1 = __importDefault(require("../tags/H3"));
const H4_1 = __importDefault(require("../tags/H4"));
class WorkexpPoints extends EnhancedDiv_1.default {
    constructor(props) {
        super({
            class: "workexp_points", children: [
                new List_1.SimpleUnorderedList(props.points),
                new TechStack_1.default(props.techstack)
            ]
        });
    }
}
class WorkexpCard extends EnhancedDiv_1.default {
    constructor(props, idx) {
        var workexpCardClass = "workexp_card";
        if (idx == 0)
            workexpCardClass += " workexp_card_selected";
        super({
            class: workexpCardClass, children: [
                new H3_1.default().class("workexp_title").p(props.company),
                new H4_1.default().class("workexp_subtitle").p(props.role),
                new H4_1.default().class("workexp_timespan").p(props.start + " - " + props.end),
                new WorkexpPoints({ points: props.points, techstack: props.techstack })
            ]
        });
    }
}
exports.default = WorkexpCard;
