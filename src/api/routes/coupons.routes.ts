import { Application } from 'express';

export function register(app: Application) {
  app.get('/coupons', (req, res) => {
    res.send({ coupons: [{ couponId: '284LD' }] });
  });
}
