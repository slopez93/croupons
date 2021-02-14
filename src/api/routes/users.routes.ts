import { Application, Request, Response } from 'express';
import container from '../../config/di';

export function register(app: Application) {
  const controller = container.get('Api.Users.controllers.CreatePostController');
  app.post('/user', (req: Request, res: Response) => controller.run(req, res));

  app.get('/users', (req, res) => {
    res.send({ users: [{ id: 3, email: 'test@test.com' }] });
  });
}
