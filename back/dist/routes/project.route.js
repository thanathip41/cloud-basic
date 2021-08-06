"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var auth_middleware_1 = __importDefault(require("../http/middlewares/auth.middleware"));
var project_controller_1 = require("../http/controllers/project/project.controller");
var router = express_1.default.Router();
var project = new project_controller_1.ProjectController();
router.get('/', auth_middleware_1.default, project.index);
router.post('/', auth_middleware_1.default, project.store);
router.get('/:id', auth_middleware_1.default, project.show);
router.put('/:id', auth_middleware_1.default, project.update);
router.patch('/:id', auth_middleware_1.default, project.update);
router.delete('/:id', auth_middleware_1.default, project.destroy);
exports.default = router;
