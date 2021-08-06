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
var OauthAccessToken_1 = __importDefault(require("../../models/OauthAccessToken"));
var utils_1 = require("../../utils");
var exception_1 = require("../../exception");
var env_1 = __importDefault(require("../../config/env"));
var redis_1 = __importDefault(require("../../providers/redis"));
exports.default = (function (req, _, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, bearer, token_1, _b, cached, currentCached, userCached, user, decode, oauth, err_1;
    var _c, _d;
    return __generator(this, function (_e) {
        switch (_e.label) {
            case 0:
                _e.trys.push([0, 6, , 7]);
                _a = (_d = (_c = req.headers.authorization) === null || _c === void 0 ? void 0 : _c.split(' ')) !== null && _d !== void 0 ? _d : [], bearer = _a[0], token_1 = _a[1];
                if (!["bearer", "Bearer"].includes(bearer) || token_1 == null)
                    return [2 /*return*/, exception_1.BadRequest('Required Bearer Token')];
                _b = env_1.default.REDIS_USED;
                switch (_b) {
                    case true: return [3 /*break*/, 1];
                }
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, redis_1.default.get('accessTokens')];
            case 2:
                cached = _e.sent();
                if (!cached)
                    return [2 /*return*/, exception_1.Unauthorized()];
                currentCached = JSON.parse(cached) || [];
                userCached = currentCached.find(function (data) { return data.accessToken === token_1; });
                user = userCached ? userCached.user : null;
                if (user == null)
                    return [2 /*return*/, exception_1.Unauthorized()];
                req.authUser = user;
                req.oauthAccessToken = token_1;
                return [2 /*return*/, next()];
            case 3:
                decode = utils_1.decodeToken(token_1);
                return [4 /*yield*/, new OauthAccessToken_1.default()
                        .with('user')
                        .where('revoked', false)
                        .where('id', decode)
                        .first()];
            case 4:
                oauth = _e.sent();
                if ((oauth === null || oauth === void 0 ? void 0 : oauth.user) == null)
                    return [2 /*return*/, exception_1.Unauthorized()];
                req.authUser = oauth.user;
                req.oauthAccessToken = oauth.id;
                return [2 /*return*/, next()];
            case 5: return [3 /*break*/, 7];
            case 6:
                err_1 = _e.sent();
                return [2 /*return*/, next(err_1)];
            case 7: return [2 /*return*/];
        }
    });
}); });
