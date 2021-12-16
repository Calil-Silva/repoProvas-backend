import { getRepository } from 'typeorm';
import Categories from '../entities/Categories';
import Names from '../entities/Names';
import Periods from '../entities/Periods';
import Professors from '../entities/Professors';
import ProfessorsBySubject from '../entities/ProfessorsBySubject';
import Subjects from '../entities/Subjects';
import Tests from '../entities/Tests';

async function getAllTests() {
  const tests = await getRepository(Tests)
    .createQueryBuilder('tests')
    .select('tests.id', 'testId')
    .addSelect('tests.link', 'link')
    .addSelect('names.test_name', 'testName')
    .addSelect('categories.category_name', 'categoryName')
    .addSelect('subjects.subject_name', 'subjectName')
    .addSelect('professors.professor_name', 'professorName')
    .addSelect('periods.period_name', 'periodName')
    .innerJoin(Names, 'names', 'tests.test_name_id = names.id')
    .innerJoin(Categories, 'categories', 'tests.category_id = categories.id')
    .innerJoin(
      ProfessorsBySubject,
      'professors_by_subject',
      'tests.sub_pro_id = professors_by_subject.id',
    )
    .innerJoin(
      Subjects,
      'subjects',
      'professors_by_subject.subject_id = subjects.id',
    )
    .innerJoin(
      Professors,
      'professors',
      'professors_by_subject.professor_id = professors.id',
    )
    .innerJoin(Periods, 'periods', 'tests.period_id = periods.id')
    .getRawMany();

  const professors = await getRepository(Professors).find({
    select: ['professor_name'],
  });

  return { tests, professors };
}

export { getAllTests };
