import supertest from 'supertest';
import { getConnection } from 'typeorm';
import * as testCreationController from '../../src/controllers/testCreationController';
import '../../src/setup';
import app, { init } from '../../src/app';

const agent = supertest(app);

beforeAll(async () => {
    await init();
});

afterAll(async () => {
    await getConnection().close();
});
