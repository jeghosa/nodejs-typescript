"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectdb = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
function connectdb(url) {
    mongoose_1.default.connect(url);
}
exports.connectdb = connectdb;
