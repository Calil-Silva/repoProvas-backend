import { Request, Response } from 'express';
import * as testCreationService from '../services/testCreationService';

async function createTest(req: Request, res: Response) {
    const newTest = await testCreationService.createTest(req.body);

    return res.status(200).send(newTest);
}

export { createTest };
