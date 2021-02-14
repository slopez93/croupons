"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const di_1 = __importDefault(require("../../config/di"));
const CreatePostController_1 = require("../controllers/users/CreatePostController");
function register(app) {
    const controller = di_1.default.get('Api.Users.controllers.CreatePostController');
    app.get('/users', controller.run.bind(CreatePostController_1.CreateUserPostController));
}
exports.register = register;
