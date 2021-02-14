"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserRequest = void 0;
class CreateUserRequest {
    constructor(email) {
        this._email = email;
    }
    email() {
        return this._email;
    }
}
exports.CreateUserRequest = CreateUserRequest;
