import supertest from 'supertest';
import '../../src/setup';
import app from '../../src/app';
import {
    cleanDataBase,
    endConnection,
    startConnection,
} from '../utils/database';
import httpStatus from '../../src/enum/statusCode';

const agent = supertest(app);

beforeAll(async () => {
    await startConnection();
});

beforeEach(async () => {
    await cleanDataBase();
});

afterAll(async () => {
    await endConnection();
});

describe('GET /test-form', () => {
    test('Should return status code 200 and a body with params', async () => {
        const result = await agent.get('/test-form');

        expect(result.statusCode).toEqual(httpStatus.ACCEPTED);
        expect(result.body).toHaveProperty('tests');
        expect(result.body).toHaveProperty('professors');
        expect(result.body).toHaveProperty('periods');
        expect(result.body).toHaveProperty('subjects');
    });
});
