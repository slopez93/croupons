import bodyParser from 'body-parser';
import express, { Application } from 'express';
import { registerRoutes } from './routes';
import { registerSubscribers } from './subscribers';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

registerRoutes(app);
registerSubscribers();

export default app;
