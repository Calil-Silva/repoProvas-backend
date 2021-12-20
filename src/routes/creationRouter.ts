import express from 'express';
import * as testCreationController from '../controllers/testCreationController';

const router = express.Router();

router.post('/', testCreationController.createTest);
router.get('/', testCreationController.getTestsParams);

export default router;
