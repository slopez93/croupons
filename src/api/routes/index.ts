import { Application } from 'express';
import glob from 'glob';

export function registerRoutes(app: Application): void {
  app.get('/', (req: any, res: any) => {
    res.send('Hello world!');
  });
  // app.get('/users', (req, res) => {
  //   res.send({ users: [{ id: 1, email: 'test@test.com' }] });
  // });
  const routes = glob.sync(__dirname + '/**/*.routes.*');
  console.log(__dirname);
  routes.map((item: string) => {
    const route = require(item);
    route.register(app);
  });
}
