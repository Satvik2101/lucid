"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EnhancedDiv_1 = __importDefault(require("../utils/EnhancedDiv"));
const Bio_1 = __importDefault(require("./Bio"));
const NameAndDesignation_1 = __importDefault(require("./NameAndDesignation"));
const ProfileLinks_1 = __importDefault(require("./ProfileLinks"));
class Home extends EnhancedDiv_1.default {
    constructor() {
        super({
            id: "home",
            children: [
                new EnhancedDiv_1.default({
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
