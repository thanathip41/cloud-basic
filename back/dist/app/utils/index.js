"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useState = exports.decodeToken = exports.encodeToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var env_1 = __importDefault(require("../../config/env"));
var encodeToken = function (data) {
    var accessToken = jsonwebtoken_1.default.sign({
        data: data
    }, env_1.default.JWT_SECRET, { expiresIn: +env_1.default.JWT_EXPIRE_HOUR });
    return accessToken;
};
exports.encodeToken = encodeToken;
var decodeToken = function (token) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, env_1.default.JWT_SECRET);
        return decoded.data;
    }
    catch (err) {
        var error = new Error(err.message);
        error.code = 400;
        throw error;
    }
};
exports.decodeToken = decodeToken;
var useState = function (defaultState) {
    if (defaultState === void 0) { defaultState = null; }
    var type = function (data) { return Object.prototype.toString.apply(data).slice(8, -1); };
    var checkType = function (oldState, newState) {
        switch (type(oldState)) {
            case 'Array': {
                oldState = __spreadArray(__spreadArray([], oldState), [newState]);
                break;
            }
            case 'Object': {
                if (type(newState) !== 'Object')
                    throw new TypeError('this state allow object only');
                oldState = __assign(__assign({}, oldState), newState);
                break;
            }
            case 'Boolean': {
                if (type(newState) !== 'Boolean')
                    throw new TypeError('this state allow boolean only');
                oldState = newState;
                break;
            }
            case 'Number': {
                if (type(newState) !== 'Number')
                    throw new TypeError('this state allow number only');
                oldState = newState;
                break;
            }
            case 'String': {
                if (type(newState) !== 'String')
                    throw new TypeError('this state allow string only');
                oldState = newState;
                break;
            }
            case 'Null' || 'Undefined': {
                oldState = newState;
                break;
            }
            default: {
                throw new Error("Can't set state");
            }
        }
        return oldState;
    };
    var getState = function () { return defaultState; };
    var setState = function (newState) { return defaultState = checkType(defaultState, newState); };
    return [getState, setState];
};
exports.useState = useState;
