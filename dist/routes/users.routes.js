"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const register = (app) => {
    app.get('/users', (req, res) => {
        res.send({ users: [{ id: 2, email: 'test@test.com' }] });
    });
};
exports.register = register;
