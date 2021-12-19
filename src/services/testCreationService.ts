import { Test } from '../protocols/TestInterface';
import * as testCreationRepository from '../repositories/testCreationRepository';

async function createTest(test: Test) {
    const newTest = await testCreationRepository.createNewTest(test);

    return newTest;
}

async function getTestsParams() {
    const testsPeriods = await testCreationRepository.getTestsParams();

    return testsPeriods;
}

export { createTest, getTestsParams };
