"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email) {
        this._id = id;
        this._email = email;
    }
    id() {
        return this._id;
    }
    email() {
        return this._email;
    }
    toPrimitives() {
        return {
            id: this._id,
            email: this._email,
        };
    }
}
exports.User = User;
