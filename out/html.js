"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const html = (templateStrings, ...values) => {
    let result = '';
    for (let i = 0; i < values.length; i++) {
        result += templateStrings[i] + values[i];
    }
    result += templateStrings[templateStrings.length - 1];
    return result;
};
exports.default = html;
