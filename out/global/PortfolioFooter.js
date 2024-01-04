"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Footer_1 = __importDefault(require("../tags/Footer"));
const I_1 = __importDefault(require("../tags/I"));
class PortfolioFooter extends Footer_1.default {
    constructor() {
        super([
            "Built",
            new I_1.default().class("fa-solid fa-code"),
            "by Satvik Gupta"
        ]);
    }
}
exports.default = PortfolioFooter;
