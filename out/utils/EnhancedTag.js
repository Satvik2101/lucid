"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Script_1 = __importDefault(require("../tags/Script"));
class EnhancedScript extends Script_1.default {
    constructor(src) {
        super();
        this.src(src);
    }
}
exports.default = EnhancedScript;
