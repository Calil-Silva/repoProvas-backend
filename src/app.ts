import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import * as testCreationController from './controllers/testCreationController';

import connection from './database';

export async function init() {
    await connection();
}

const app = express();
app.use(cors());
app.use(express.json());

app.post('/test-creation', testCreationController.createTest);

export default app;
