"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const NavBar_1 = __importDefault(require("../global/NavBar"));
const ArcReactor_1 = __importDefault(require("./ArcReactor"));
const BorderMask_1 = __importDefault(require("./BorderMask"));
const Home_1 = __importDefault(require("./Home"));
class BackgroundImageSection extends EnhancedDiv_1.default {
    constructor() {
        super({
            id: "bg_image",
            children: [
                new ArcReactor_1.default(),
                new NavBar_1.default(),
                new BorderMask_1.default(),
                new Home_1.default(),
            ]
        });
    }
}
exports.default = BackgroundImageSection;
