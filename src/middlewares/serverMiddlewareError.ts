import { Errback, NextFunction, Request, Response } from 'express';
import httpStatus from '../enum/statusCode';

async function serverMiddlewareError(
    err: Errback,
    req: Request,
    res: Response,
    next: NextFunction,
) {
    console.error(err);

    res.sendStatus(httpStatus.SERVER_ERROR);
}

export { serverMiddlewareError };
