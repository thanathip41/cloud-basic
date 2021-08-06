"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var default_route_1 = __importDefault(require("./default.route"));
var auth_route_1 = __importDefault(require("./auth.route"));
var user_route_1 = __importDefault(require("./user.route"));
var project_route_1 = __importDefault(require("./project.route"));
var _a = utils_1.useState([]), routers = _a[0], setRouter = _a[1];
setRouter({ prefix: 'api', route: auth_route_1.default });
setRouter({ prefix: 'api/users', route: user_route_1.default });
setRouter({ prefix: 'api/users/projects', route: project_route_1.default });
exports.default = __spreadArray(__spreadArray([], routers()), [{
        prefix: '*',
        route: default_route_1.default
    }]);
