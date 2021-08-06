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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotFound = exports.Forbidden = exports.PaymentRequired = exports.Unauthorized = exports.BadRequest = exports.handlerError = void 0;
var handlerError = function (_a) {
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
exports.handlerError = handlerError;
var BadRequest = function (message) {
    if (message === void 0) { message = 'Bad Request'; }
    throw exports.handlerError({
        message: message,
        code: 400
    });
};
exports.BadRequest = BadRequest;
var Unauthorized = function (message) {
    if (message === void 0) { message = 'Unauthorized'; }
    throw exports.handlerError({
        message: message,
        code: 401
    });
};
exports.Unauthorized = Unauthorized;
var PaymentRequired = function (message) {
    if (message === void 0) { message = 'Payment Required'; }
    throw exports.handlerError({
        message: message,
        code: 402
    });
};
exports.PaymentRequired = PaymentRequired;
var Forbidden = function (message) {
    if (message === void 0) { message = 'Forbidden'; }
    throw exports.handlerError({
        message: message,
        code: 403
    });
};
exports.Forbidden = Forbidden;
var NotFound = function (message) {
    if (message === void 0) { message = 'Not Found'; }
    throw exports.handlerError({
        message: message,
        code: 404
    });
};
exports.NotFound = NotFound;
var ServerError = function (message) {
    if (message === void 0) { message = 'Internal Server Error'; }
    throw exports.handlerError({
        message: message,
        code: 500
    });
};
exports.ServerError = ServerError;
