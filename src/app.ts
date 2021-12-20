import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import findRouter from './routes/findRouter';
import creationRouter from './routes/creationRouter';

import connection from './database';
import { serverMiddlewareError } from './middlewares/serverMiddlewareError';

export async function init() {
    await connection();
}

const app = express();
app.use(cors());
app.use(express.json());

app.use('/test-form', findRouter);
app.use('/test-creation', creationRouter);

app.use(serverMiddlewareError);

export default app;
