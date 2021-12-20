import { Request, Response } from 'express';
import * as testServices from '../services/testsService';

async function listTests(req: Request, res: Response) {
    const tests = await testServices.findTests();

    return res.status(200).send(tests);
}

export { listTests };
