"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var redis_1 = __importDefault(require("redis"));
var env_1 = __importDefault(require("../../config/env"));
var options = {
    development: {
        host: env_1.default.REDIS_HOST,
        port: env_1.default.REDIS_PORT,
        password: env_1.default.REDIS_PASSWORD,
    },
    production: {
        host: env_1.default.REDIS_HOST_PROD,
        port: env_1.default.REDIS_PORT_PROD,
        password: env_1.default.REDIS_PASSWORD_PROD,
    }
};
var config = options[env_1.default.NODE_ENV || 'development'];
var client = redis_1.default.createClient(config);
client.on("error", function (err) {
    if (err)
        client.quit();
    if (env_1.default.REDIS_USED || env_1.default.REDIS_USED_PROD)
        console.log('redis connected lost !');
});
exports.default = client;
