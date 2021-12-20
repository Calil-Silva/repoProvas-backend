import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import * as testsController from '../src/controllers/testsController';
import creationRouter from './routes/creationRouter';

import connection from './database';
import { serverMiddlewareError } from './middlewares/serverMiddlewareError';

export async function init() {
    await connection();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test-form', testsController.listTests);
app.use('/test-creation', creationRouter);

app.use(serverMiddlewareError);

export default app;
