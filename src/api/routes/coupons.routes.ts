import { Express } from 'express';

export const register = (app: Express) => {
  app.get('/coupons', (req, res) => {
    res.send({ users: [{ couponId: '2948584' }] });
  });
};
