"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.onListening = exports.onError = exports.getLocalNetwork = exports.handlerError = void 0;
var os_1 = require("os");
var env_1 = __importDefault(require("../config/env"));
var tspace_utils_1 = require("tspace-utils");
var handlerError = function (err, _, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var code, message;
    return __generator(this, function (_a) {
        code = err.code || 500;
        message = err.message || 'error';
        if (code === 500)
            new tspace_utils_1.Logger().error(err);
        return [2 /*return*/, res
                .status(code)
                .json({
                success: false,
                message: message,
                code: code
            })];
    });
}); };
exports.handlerError = handlerError;
var getLocalNetwork = function () {
    var _a, _b, _c, _d, _e;
    try {
        return (_e = (_d = (_c = (_b = (_a = Object.values(os_1.networkInterfaces())) === null || _a === void 0 ? void 0 : _a.map(function (data) { return data; })) === null || _b === void 0 ? void 0 : _b.shift()) === null || _c === void 0 ? void 0 : _c.filter(function (details) { return (details === null || details === void 0 ? void 0 : details.family) === 'IPv4' && !(details === null || details === void 0 ? void 0 : details.internal); })) === null || _d === void 0 ? void 0 : _d.pop()) === null || _e === void 0 ? void 0 : _e.address;
    }
    catch (err) {
        return 'localhost';
    }
};
exports.getLocalNetwork = getLocalNetwork;
var onError = function (err) {
    var _a;
    var port = (_a = env_1.default.PORT) !== null && _a !== void 0 ? _a : 8000;
    switch (err.code) {
        case 'EACCES':
            console.log("\n\u001B[1m\u001B[31m " + err.message + "\u001B[0m");
            break;
        case 'EADDRINUSE':
            console.log("\n\u001B[1m\u001B[31m port :" + port + " is already in use \u001B[0m");
            break;
        default:
            throw err;
    }
};
exports.onError = onError;
var onListening = function () {
    var _a;
    var port = (_a = env_1.default.PORT) !== null && _a !== void 0 ? _a : 8000;
    console.log("\n\u001B[1m\u001B[34m app start environment " + env_1.default.NODE_ENV + " mode\n      Local http://localhost:" + port + "\n      Network http://" + exports.getLocalNetwork() + ":" + port + "\n      \u001B[0m");
};
exports.onListening = onListening;
