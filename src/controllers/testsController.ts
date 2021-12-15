import { Request, Response } from 'express';
import { getAllTests } from '../services/testsServices';

async function listTests(req: Request, res: Response) {
  const tests = await getAllTests();
  console.log(tests);

  return res.status(200).send(tests);
}

export { listTests };
