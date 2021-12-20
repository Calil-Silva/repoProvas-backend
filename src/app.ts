import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import creationRouter from './routes/creationRouter';

import connection from './database';

export async function init() {
    await connection();
}

const app = express();
app.use(cors());
app.use(express.json());

app.use('/test-creation', creationRouter);

export default app;
