import { getRepository } from 'typeorm';
import Tests from '../entities/Tests';
import { Test } from '../protocols/TestInterface';

async function createNewTest(test: Test) {
    const { name, category, professor, subject, link, period } = test;
    console.log('cheguei aqui');
    const newTest = await getRepository(Tests).find({
        where: {
            period: { period_name: period },
        },
        relations: ['period'],
    });

    return newTest;
}

export { createNewTest };
