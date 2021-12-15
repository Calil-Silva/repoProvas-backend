import { Request, Response } from 'express';
import * as textServices from '../services/testsService';

async function listTests(req: Request, res: Response) {
  const tests = await textServices.findTests();

  return res.status(200).send(tests);
}

export { listTests };
