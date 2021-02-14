"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
function register(app) {
    app.get('/coupons', (req, res) => {
        res.send({ coupons: [{ couponId: '284LD' }] });
    });
}
exports.register = register;
