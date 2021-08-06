"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var env_1 = __importDefault(require("./config/env"));
var http_1 = __importDefault(require("http"));
var context_1 = require("./context");
var port = (_a = +env_1.default.PORT) !== null && _a !== void 0 ? _a : 8000;
var server = http_1.default.createServer(app_1.default);
server.listen(port);
server.on('error', context_1.onError);
server.on('listening', context_1.onListening);
