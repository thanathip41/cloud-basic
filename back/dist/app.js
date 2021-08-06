"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var nocache_1 = __importDefault(require("nocache"));
var context_1 = require("./context");
var routes_1 = __importDefault(require("./routes"));
var app = express_1.default();
app.use(helmet_1.default());
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use('/public', express_1.default.static(path_1.default.join(path_1.default.resolve(), 'src/public')));
app.use(nocache_1.default());
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors_1.default(corsOptions));
app.set('trust proxy', true);
routes_1.default.forEach(function (router) {
    app.use("/" + router.prefix, router.route);
});
app.use(context_1.handlerError);
exports.default = app;
