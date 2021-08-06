"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisDelete = exports.redisSetExpire = exports.redisSet = exports.redisGet = void 0;
var redis_config_1 = __importDefault(require("./redis.config"));
var util_1 = require("util");
exports.redisGet = util_1.promisify(redis_config_1.default.get).bind(redis_config_1.default);
exports.redisSet = util_1.promisify(redis_config_1.default.set).bind(redis_config_1.default);
exports.redisSetExpire = util_1.promisify(redis_config_1.default.setex).bind(redis_config_1.default);
exports.redisDelete = util_1.promisify(redis_config_1.default.del).bind(redis_config_1.default);
exports.default = {
    get: exports.redisGet,
    set: exports.redisSet,
    del: exports.redisDelete,
    setex: exports.redisSetExpire
};
