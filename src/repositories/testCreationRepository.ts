import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';
import Names from '../entities/Names';
import Periods from '../entities/Periods';
import ProfessorsBySubject from '../entities/ProfessorsBySubject';
import Tests from '../entities/Tests';
import { Test } from '../protocols/TestInterface';

async function createNewTest(test: Test) {
    const { name, category, professor, subject, link, period } = test;

    const findTestName = await getRepository(Names).find({ test_name: name });

    if (findTestName.length === 0) {
        await getRepository(Names).insert({ test_name: name });
    }

    const professorsBySubjectId = (
        await getRepository(ProfessorsBySubject).find({
            where: {
                professor: { professor_name: professor },
                subject: { subject_name: subject },
            },
            relations: ['professor', 'subject'],
        })
    )[0]?.id;

    const categoryId = (
        await getRepository(Categories).find({ categoryName: category })
    )[0]?.id;

    const periodId = (
        await getRepository(Periods).find({ periodName: period })
    )[0]?.id;

    const newTest = await getRepository(Tests).insert({
        test_name_id: findTestName[0].id,
        category_id: categoryId,
        period_id: periodId,
        sub_pro_id: professorsBySubjectId,
        link,
    });

    return newTest;
}

async function getTestsParams() {
    const periodsNames = (await getRepository(Periods).find()).map(
        ({ periodName }) => periodName,
    );
    const categoriesNames = (await getRepository(Categories).find()).map(
        ({ categoryName }) => categoryName,
    );
    const professorsBySubject = await getRepository(ProfessorsBySubject).find({
        relations: ['subject', 'professor'],
    });

    return periodsNames;
}

export { createNewTest, getTestsParams };
