"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Div_1 = __importDefault(require("../Div"));
const Bio_1 = __importDefault(require("./Bio"));
const NameAndDesignation_1 = __importDefault(require("./NameAndDesignation"));
const ProfileLinks_1 = __importDefault(require("./ProfileLinks"));
class Home extends Div_1.default {
    constructor() {
        super({
            id: "home",
            children: [
                new Div_1.default({
                    id: "home_section",
                    children: [
                        new NameAndDesignation_1.default(),
                        new Bio_1.default(),
                        new ProfileLinks_1.default(),
                    ]
                })
            ]
        });
    }
}
exports.default = Home;
