"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_middleware_1 = __importDefault(require("../http/middlewares/auth.middleware"));
var auth_controller_1 = require("../http/controllers/auth/auth.controller");
var router = express_1.default.Router();
var auth = new auth_controller_1.AuthController();
router.get('/test', auth.test);
router.post('/login', auth.login);
router.post('/register', auth.register);
router.delete('/logout', auth_middleware_1.default, auth.logout);
exports.default = router;
