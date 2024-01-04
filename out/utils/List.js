"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleOrderedList = exports.SimpleUnorderedList = void 0;
const Li_1 = __importDefault(require("../tags/Li"));
const Ol_1 = __importDefault(require("../tags/Ol"));
const Ul_1 = __importDefault(require("../tags/Ul"));
class SimpleUnorderedList extends Ul_1.default {
    constructor(items) {
        super(items.map(item => new Li_1.default(item)));
    }
}
exports.SimpleUnorderedList = SimpleUnorderedList;
class SimpleOrderedList extends Ol_1.default {
    constructor(items) {
        super(items.map(item => new Li_1.default(item)));
    }
}
exports.SimpleOrderedList = SimpleOrderedList;
