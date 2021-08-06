"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var ENV = process.env;
var env = {
    NODE_ENV: ENV.NODE_ENV,
    PORT: ENV.PORT,
    DB_HOST: ENV.DB_HOST,
    DB_DIALECT: ENV.DB_DIALECT,
    DB_PORT: ENV.DB_PORT,
    DB_USERNAME: ENV.DB_USERNAME,
    DB_PASSWORD: ENV.DB_PASSWORD,
    DB_DATABASE: ENV.DB_DATABASE,
    DB_HOST_PROD: ENV.DB_HOST_PROD,
    DB_DIALECT_PROD: ENV.DB_DIALECT_PROD,
    DB_PORT_PROD: ENV.DB_PORT_PROD,
    DB_USERNAME_PROD: ENV.DB_USERNAME_PROD,
    DB_PASSWORD_PROD: ENV.DB_PASSWORD_PROD,
    DB_DATABASE_PROD: ENV.DB_DATABASE_PROD,
    REDIS_USED: ENV.REDIS_USED,
    REDIS_TIME: ENV.REDIS_TIME,
    REDIS_HOST: ENV.REDIS_HOST,
    REDIS_PORT: ENV.REDIS_PORT,
    REDIS_PASSWORD: ENV.REDIS_PASSWORD,
    REDIS_USED_PROD: ENV.REDIS_USED_PROD,
    REDIS_HOST_PROD: ENV.REDIS_HOST_PROD,
    REDIS_PORT_PROD: ENV.REDIS_PORT_PROD,
    REDIS_PASSWORD_PROD: ENV.REDIS_PASSWORD_PROD,
    JWT_SECRET: ENV.JWT_SECRET,
    JWT_EXPIRE_HOUR: ENV.JWT_EXPIRE_HOUR,
};
Object.entries(env).forEach(function (_a) {
    var key = _a[0], value = _a[1];
    if (value === 'true' || value === 'false') {
        env[key] = JSON.parse(value.toLowerCase());
    }
});
exports.default = env;
