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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.register = exports.login = void 0;
var tspace_utils_1 = require("tspace-utils");
var utils_1 = require("../../../utils");
var exception_1 = require("../../../exception");
var bcryptjs_1 = __importDefault(require("bcryptjs"));
var env_1 = __importDefault(require("../../../../config/env"));
var redis_1 = __importDefault(require("../../../providers/redis"));
var User_1 = __importDefault(require("../../../models/User"));
var OauthAccessToken_1 = __importDefault(require("../../../models/OauthAccessToken"));
var login = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, email, password, user, match, _b, accessToken, setAccessToken, _c, cached, currentCached, data, newCached, TIME, oauth, err_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 9, , 10]);
                new tspace_utils_1.Validate().check(req.body, {
                    email: new tspace_utils_1.Rule().required().email(),
                    password: new tspace_utils_1.Rule().required()
                });
                _a = req.body, email = _a.email, password = _a.password;
                return [4 /*yield*/, new User_1.default()
                        .where('email', email)
                        .first()];
            case 1:
                user = _d.sent();
                if (!user)
                    return [2 /*return*/, exception_1.Unauthorized()];
                return [4 /*yield*/, bcryptjs_1.default.compare(password, user.password)];
            case 2:
                match = _d.sent();
                if (!match)
                    return [2 /*return*/, exception_1.Unauthorized()];
                delete user.password;
                _b = utils_1.useState(''), accessToken = _b[0], setAccessToken = _b[1];
                _c = env_1.default.REDIS_USED;
                switch (_c) {
                    case true: return [3 /*break*/, 3];
                }
                return [3 /*break*/, 6];
            case 3:
                setAccessToken(utils_1.encodeToken(user.id));
                return [4 /*yield*/, redis_1.default.get('accessTokens')];
            case 4:
                cached = _d.sent();
                currentCached = JSON.parse(cached) || [];
                data = { accessToken: accessToken(), user: user };
                newCached = __spreadArray(__spreadArray([], currentCached), [data]);
                TIME = +env_1.default.REDIS_TIME;
                return [4 /*yield*/, redis_1.default.setex('accessTokens', TIME, JSON.stringify(newCached))];
            case 5:
                _d.sent();
                return [3 /*break*/, 8];
            case 6: return [4 /*yield*/, new OauthAccessToken_1.default()
                    .create({
                    user_id: user.id,
                    revoked: 0
                }).save()];
            case 7:
                oauth = _d.sent();
                setAccessToken(utils_1.encodeToken(oauth.id));
                return [3 /*break*/, 8];
            case 8: return [2 /*return*/, res
                    .json({
                    success: true,
                    user: user,
                    access_token: accessToken()
                })];
            case 9:
                err_1 = _d.sent();
                return [2 /*return*/, next(err_1)];
            case 10: return [2 /*return*/];
        }
    });
}); };
exports.login = login;
var register = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name_1, email, password, hash, user, _b, accessToken, setAccessToken, _c, cached, currentCached, data, newCached, TIME, oauth, err_2;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 8, , 9]);
                new tspace_utils_1.Validate().check(req.body, {
                    name: new tspace_utils_1.Rule().required(),
                    email: new tspace_utils_1.Rule().required().email(),
                    password: new tspace_utils_1.Rule().required().confirm('password_confirmation'),
                    password_confirmation: new tspace_utils_1.Rule().required()
                });
                _a = req.body, name_1 = _a.name, email = _a.email, password = _a.password;
                hash = bcryptjs_1.default.hashSync(password, 3);
                return [4 /*yield*/, new User_1.default()
                        .where('email', email)
                        .createNotExists({
                        name: name_1,
                        email: email,
                        password: hash
                    }).save({ debug: true })];
            case 1:
                user = _d.sent();
                if (!user)
                    return [2 /*return*/, exception_1.BadRequest('email is unquied')];
                _b = utils_1.useState(''), accessToken = _b[0], setAccessToken = _b[1];
                _c = env_1.default.REDIS_USED;
                switch (_c) {
                    case true: return [3 /*break*/, 2];
                }
                return [3 /*break*/, 5];
            case 2:
                setAccessToken(utils_1.encodeToken(user.id));
                return [4 /*yield*/, redis_1.default.get('accessTokens')];
            case 3:
                cached = _d.sent();
                currentCached = JSON.parse(cached) || [];
                data = { accessToken: accessToken(), user: user };
                newCached = __spreadArray(__spreadArray([], currentCached), [data]);
                TIME = +env_1.default.REDIS_TIME;
                return [4 /*yield*/, redis_1.default.setex('accessTokens', TIME, JSON.stringify(newCached))];
            case 4:
                _d.sent();
                return [3 /*break*/, 7];
            case 5: return [4 /*yield*/, new OauthAccessToken_1.default().create({
                    user_id: user.id,
                    revoked: 0
                }).save()];
            case 6:
                oauth = _d.sent();
                setAccessToken(utils_1.encodeToken(oauth.id));
                return [3 /*break*/, 7];
            case 7: return [2 /*return*/, res.json({
                    success: true,
                    user: user,
                    access_token: accessToken()
                }).status(201)];
            case 8:
                err_2 = _d.sent();
                next(err_2);
                return [3 /*break*/, 9];
            case 9: return [2 /*return*/];
        }
    });
}); };
exports.register = register;
var logout = function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var oauthAccessToken_1, _a, cached, currentCached, TIME, newCached, deleted, err_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 7, , 8]);
                oauthAccessToken_1 = req.oauthAccessToken;
                _a = env_1.default.REDIS_USED;
                switch (_a) {
                    case true: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 4];
            case 1: return [4 /*yield*/, redis_1.default.get('accessTokens')];
            case 2:
                cached = _b.sent();
                if (!cached)
                    return [2 /*return*/, res.status(204).json()];
                currentCached = JSON.parse(cached) || [];
                TIME = +env_1.default.REDIS_TIME;
                newCached = currentCached.filter(function (data) { return data.accessToken !== oauthAccessToken_1; });
                return [4 /*yield*/, redis_1.default.setex('accessTokens', TIME, JSON.stringify(newCached))];
            case 3:
                _b.sent();
                return [3 /*break*/, 6];
            case 4: return [4 /*yield*/, new OauthAccessToken_1.default()
                    .update({
                    revoked: true
                })
                    .where('id', oauthAccessToken_1)
                    .save()];
            case 5:
                deleted = _b.sent();
                if (!deleted)
                    return [2 /*return*/, exception_1.BadRequest('invalid authorization token')];
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/, res.status(204).json()];
            case 7:
                err_3 = _b.sent();
                return [2 /*return*/, next(err_3)];
            case 8: return [2 /*return*/];
        }
    });
}); };
exports.logout = logout;
