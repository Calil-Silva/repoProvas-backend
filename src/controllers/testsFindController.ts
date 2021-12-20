import { NextFunction, Request, Response } from 'express';
import httpStatus from '../enum/statusCode';
import * as testServices from '../services/testFindService';

async function listTests(req: Request, res: Response, next: NextFunction) {
    try {
        const tests = await testServices.findTests();

        return res.status(httpStatus.ACCEPTED).send(tests);
    } catch (error) {
        return next(error);
    }
}

export { listTests };
