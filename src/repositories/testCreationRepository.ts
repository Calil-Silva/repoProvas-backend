import { getRepository } from 'typeorm';
import Tests from '../entities/Tests';
import { Test } from '../protocols/TestInterface';

async function createNewTest(test: Test) {
    const { name, category, professor, subject, link, period } = test;

    const newTest = await getRepository(Tests);
}
