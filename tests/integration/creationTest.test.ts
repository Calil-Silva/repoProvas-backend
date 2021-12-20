import supertest from 'supertest';
import '../../src/setup';
import app from '../../src/app';
import {
    cleanDataBase,
    endConnection,
    startConnection,
} from '../utils/database';
import { Test } from '../../src/protocols/TestInterface';
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

describe('POST /test-creation', () => {
    test('Should return status code 201 if params are right', async () => {
        const testParams: Test = {
            name: 'test T',
            category: 'P2',
            professor: 'Lenadro',
            subject: 'javascript',
            link: 'http://...',
            period: '1 sem',
        };

        const result = await agent.post('/test-creation').send(testParams);

        expect(result.statusCode).toEqual(httpStatus.CREATED);
    });

    test('Should return status code 400 if params are not right', async () => {
        const testParams: Test = {
            name: 'test T',
            category: '',
            professor: 'Lenadro',
            subject: 'javascript',
            link: 'http://...',
            period: '1 sem',
        };

        const result = await agent.post('/test-creation').send(testParams);

        expect(result.statusCode).toEqual(httpStatus.BAD_REQUEST);
    });
});

describe('GET /test-creation', () => {
    test('Should return status code 200 and a body with the requested params', async () => {
        const result = await agent.get('/test-creation');

        expect(result.statusCode).toEqual(httpStatus.OK);
        expect(result.body).toHaveProperty('periodsNames');
        expect(result.body).toHaveProperty('categoriesNames');
        expect(result.body).toHaveProperty('professorsBySubject');
    });
});
