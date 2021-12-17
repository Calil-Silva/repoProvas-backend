import { Test } from '../protocols/TestInterface';
import * as testCreationRepository from '../repositories/testCreationRepository';

async function createTest(test: Test) {
    const newTest = await testCreationRepository.createNewTest(test);

    return newTest;
}

export { createTest };
