import { Request, Response } from 'express';
import * as testCreationService from '../services/testCreationService';

async function createTest(req: Request, res: Response) {
    const newTest = await testCreationService.createTest(req.body);

    return res.status(200).send(newTest);
}

async function getTestsParams(req: Request, res: Response) {
    const testsPeriods = await testCreationService.getTestsParams();

    return res.status(200).send(testsPeriods);
}

export { createTest, getTestsParams };
