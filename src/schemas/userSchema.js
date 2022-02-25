"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var UserSchema = joi_1.default.object({
    username: joi_1.default.string().min(3).required(),
    classe: joi_1.default.string().min(3).required(),
    password: joi_1.default.string().min(8).required(),
    level: joi_1.default.number().required(),
});
exports.default = UserSchema;
