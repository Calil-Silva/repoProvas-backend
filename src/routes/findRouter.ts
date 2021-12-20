import express from 'express';
import * as testFindController from '../controllers/testsFindController';

const router = express.Router();

router.get('/', testFindController.listTests);

export default router;
