import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    OneToMany,
} from 'typeorm';
import Professors from './Professors';
import Subjects from './Subjects';
import Tests from './Tests';

@Entity('professors_by_subject')
export default class ProfessorsBySubject {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject_id: number;

    @Column()
    professor_id: number;

    @ManyToOne((type) => Subjects, (professorsBySubject) => ProfessorsBySubject)
    subject: Subjects;

    @ManyToMany(
        (type) => Professors,
        (professorsBySubject) => ProfessorsBySubject,
    )
    professor: Professors;

    @OneToMany((type) => Tests, (professorsBySubject) => ProfessorsBySubject)
    tests: Tests;
}
