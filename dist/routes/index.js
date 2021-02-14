"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const glob_1 = __importDefault(require("glob"));
function registerRoutes(app) {
    const routes = glob_1.default.sync(__dirname + '/**/*.routes.*');
    console.log(__dirname);
    routes.map((item) => {
        const route = require(item);
        route.register(app);
    });
}
exports.registerRoutes = registerRoutes;
