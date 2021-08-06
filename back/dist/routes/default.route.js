"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
router.use((function (_, res, next) {
    return res.status(404).json({
        success: false,
        message: 'Not Found',
        code: 404
    });
}));
exports.default = router;
