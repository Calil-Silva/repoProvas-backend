import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProfessorsBySubject from './ProfessorsBySubject';

@Entity('subjects')
export default class Subjects {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    subject_name: string;

    @OneToMany(
        (professorsBySubjects) => ProfessorsBySubject,
        (subject) => Subjects,
    )
    professorsBySubjects: ProfessorsBySubject;
}
