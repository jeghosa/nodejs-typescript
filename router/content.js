"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var icont_1 = __importDefault(require("../controllers/icont"));
var geti = require("../controllers/icont").geti;
var router = require("express").Router();
router.post("/", icont_1.default);
router.get("/", geti);
exports.default = router;
