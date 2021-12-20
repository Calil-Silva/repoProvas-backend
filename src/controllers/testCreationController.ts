import { NextFunction, Request, Response } from 'express';
import { nextTick } from 'process';
import httpStatus from '../enum/statusCode';
import { ParamsError } from '../errors/ParamsError';
import * as testCreationService from '../services/testCreationService';
import { createParamsSchema } from '../validations/createTestSchema';

async function createTest(req: Request, res: Response, next: NextFunction) {
    const { error: invalidTestParams } = createParamsSchema.validate(req.body, {
        abortEarly: false,
    });

    if (invalidTestParams) {
        const invalidMessages: string[] = invalidTestParams.details.map(
            ({ message }: { message: string }) => message,
        );

        console.error(invalidMessages);

        return res.status(httpStatus.BAD_REQUEST).send(invalidMessages);
    }

    try {
        const newTest = await testCreationService.createTest(req.body);

        return res.status(httpStatus.CREATED).send(newTest);
    } catch (error) {
        if (error instanceof ParamsError) {
            console.error(error);
            return res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
        return next(error);
    }
}

async function getTestsParams(req: Request, res: Response, next: NextFunction) {
    try {
        const testsPeriods = await testCreationService.getTestsParams();

        return res.status(httpStatus.OK).send(testsPeriods);
    } catch (error) {
        if (error instanceof ParamsError) {
            console.error(error);
            return res.status(httpStatus.BAD_REQUEST).send(error.message);
        }
        return nextTick(error);
    }
}

export { createTest, getTestsParams };
