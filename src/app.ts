import cors from 'cors';
import express from 'express';
import 'reflect-metadata';

import connection from './database';

export async function init() {
  await connection();
}

const app = express();
app.use(cors());
app.use(express.json());

export default app;
