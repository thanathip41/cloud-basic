"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var tspace_utils_1 = require("tspace-utils");
var env_1 = __importDefault(require("../../config/env"));
var Controller = /** @class */ (function () {
    function Controller() {
        var _this = this;
        this.badRequest = function (message) {
            if (message === void 0) { message = 'Bad Request'; }
            throw _this._handlerError({
                message: message,
                code: 400
            });
        };
        this.unauthorized = function (message) {
            if (message === void 0) { message = 'Unauthorized'; }
            throw _this._handlerError({
                message: message,
                code: 401
            });
        };
        this.paymentRequired = function (message) {
            if (message === void 0) { message = 'Payment Required'; }
            throw _this._handlerError({
                message: message,
                code: 402
            });
        };
        this.forbidden = function (message) {
            if (message === void 0) { message = 'Forbidden'; }
            throw _this._handlerError({
                message: message,
                code: 403
            });
        };
        this.notFound = function (message) {
            if (message === void 0) { message = 'Not Found'; }
            throw _this._handlerError({
                message: message,
                code: 404
            });
        };
        this.serverError = function (message) {
            if (message === void 0) { message = 'Internal Server Error'; }
            throw _this._handlerError({
                message: message,
                code: 500
            });
        };
        this._handlerError = function (_a) {
            var message = _a.message, code = _a.code;
            var HttpError = /** @class */ (function (_super) {
                __extends(HttpError, _super);
                function HttpError(message, code) {
                    var _this = _super.call(this, message) || this;
                    _this.code = code;
                    return _this;
                }
                return HttpError;
            }(Error));
            return new HttpError(message, code);
        };
        this.env = env_1.default;
    }
    Controller.prototype.success = function (res, data) {
        data = __assign(__assign({ success: true }, data), { code: 200 });
        return res.json(data);
    };
    Controller.prototype.ok = function (res, data) {
        data = __assign(__assign({ success: true }, data), { code: 200 });
        return res.json(data);
    };
    Controller.prototype.noContent = function (res) {
        return res.status(204).json([]);
    };
    Controller.prototype.created = function (res, data) {
        data = __assign(__assign({ success: true }, data), { code: 201 });
        return res.status(201).json(data);
    };
    Controller.prototype.error = function (res, err) {
        var code = err.code || 500;
        var message = err.message || 'error';
        if (code === 500)
            new tspace_utils_1.Logger().error(err);
        var data = {
            success: false,
            message: message,
            code: code
        };
        return res.status(code).json(data);
    };
    return Controller;
}());
exports.Controller = Controller;
