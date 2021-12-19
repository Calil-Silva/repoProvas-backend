import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    OneToMany,
    ManyToMany,
    OneToOne,
} from 'typeorm';
import ProfessorsBySubject from './ProfessorsBySubject';
import Tests from './Tests';

@Entity('professors')
export default class Professors {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    professor_name: string;

    @OneToMany((type) => ProfessorsBySubject, (professor) => Professors)
    professorsBySubject: ProfessorsBySubject[];
}
