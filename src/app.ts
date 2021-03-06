import express from 'express';
import routes from './routes';
import error from './middlewares/error';

const app = express();

app.use(express.json());

app.use(routes);
app.use(error);

export default app;
