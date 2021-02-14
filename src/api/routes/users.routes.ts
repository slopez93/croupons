import { Express } from 'express';

export const register = (app: Express) => {
  app.get('/users', (req, res) => {
    res.send({ users: [{ id: 2, email: 'test@test.com' }] });
  });
};
