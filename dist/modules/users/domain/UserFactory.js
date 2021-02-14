"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactory = void 0;
const user_1 = require("./user");
const UserId_1 = require("./UserId");
class UserFactory {
    static create(email) {
        const id = UserId_1.UserId.random().value;
        return new user_1.User(id, email);
    }
}
exports.UserFactory = UserFactory;
