import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    ManyToMany,
    OneToMany,
    JoinColumn,
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
    @JoinColumn({ name: 'subject_id' })
    subject: Subjects;

    @ManyToOne(
        (type) => Professors,
        (professorsBySubject) => ProfessorsBySubject,
    )
    @JoinColumn({ name: 'professor_id' })
    professor: Professors;
}
