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
        await getRepository(Categories).find({ category_name: category })
    )[0]?.id;

    const periodId = (
        await getRepository(Periods).find({ period_name: period })
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

export { createNewTest };
