import supertest from 'supertest';
import '../../src/setup';
import { getRepository } from 'typeorm';
import app from '../../src/app';
import {
    cleanDataBase,
    endConnection,
    startConnection,
} from '../utils/database';
import { Test } from '../../src/protocols/TestInterface';
import httpStatus from '../../src/enum/statusCode';
import Tests from '../../src/entities/Tests';

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
    beforeEach(async () => {
        await cleanDataBase();
    });

    test('Should return status code 201 if params are right', async () => {
        const testParams: Test = {
            name: 'test T',
            category: 'P2',
            professor: 'Lenadro',
            subject: 'javascript',
            link: 'http://google.com',
            period: '1 sem',
        };

        const beforeInsert = await getRepository(Tests).count();
        const result = await agent.post('/test-creation').send(testParams);
        const afterInsert = await getRepository(Tests).count();

        expect(beforeInsert).toBe(0);
        expect(result.statusCode).toEqual(httpStatus.CREATED);
        expect(afterInsert).toBe(1);
    });

    test('Should return status code 400 if params are not right', async () => {
        const testParams: Test = {
            name: 'test T$',
            category: '',
            professor: 'Lenadro',
            subject: 'javascript',
            link: 'http://...',
            period: '1 sem',
        };

        const beforeInsert = await getRepository(Tests).count();
        const result = await agent.post('/test-creation').send(testParams);
        const afterInsert = await getRepository(Tests).count();

        expect(beforeInsert).toBe(0);
        expect(result.statusCode).toEqual(httpStatus.BAD_REQUEST);
        expect(afterInsert).toBe(0);
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
