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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
const UserFactory_1 = require("../domain/UserFactory");
const CreateUserResponse_1 = require("./CreateUserResponse");
class CreateUserUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    execute(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const email = request.email();
            const user = UserFactory_1.UserFactory.create(email);
            this.repository.create(user);
            return new CreateUserResponse_1.CreateUserResponse(user.id(), user.email());
        });
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
