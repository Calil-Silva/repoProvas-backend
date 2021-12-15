import cors from 'cors';
import express from 'express';
import 'reflect-metadata';
import * as testsController from '../src/controllers/testsController';

import connection from './database';

export async function init() {
  await connection();
}

const app = express();
app.use(cors());
app.use(express.json());

app.get('/test-form', testsController.listTests);

export default app;
