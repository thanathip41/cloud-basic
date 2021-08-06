"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_middleware_1 = __importDefault(require("../http/middlewares/auth.middleware"));
var user_controller_1 = require("../http/controllers/user/user.controller");
var router = express_1.default.Router();
var user = new user_controller_1.UserController();
router.get('/profile', auth_middleware_1.default, user.index);
exports.default = router;
