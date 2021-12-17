import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import ProfessorsBySubject from './ProfessorsBySubject';

@Entity('professors')
export default class Professors {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    professor_name: string;

    @OneToMany((type) => ProfessorsBySubject, (professor) => Professors)
    professorsBySubject: ProfessorsBySubject[];
}
