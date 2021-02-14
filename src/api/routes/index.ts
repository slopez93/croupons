import { Application } from 'express';
import glob from 'glob';

export function registerRoutes(app: Application): void {
  const routes = glob.sync(__dirname + '/**/*.routes.*');
  routes.map((item: string) => {
    const route = require(item);
    route.register(app);
  });
}
