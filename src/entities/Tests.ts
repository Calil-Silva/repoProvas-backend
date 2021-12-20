import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    ManyToMany,
    JoinTable,
} from 'typeorm';
import Categories from './Categories';
import Names from './Names';
import Periods from './Periods';
import Professors from './Professors';
import ProfessorsBySubject from './ProfessorsBySubject';
import Subjects from './Subjects';

@Entity('tests')
export default class Tests {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_name_id: number;

    @Column()
    category_id: number;

    @Column()
    sub_pro_id: number;

    @Column()
    link: string;

    @ManyToOne((type) => ProfessorsBySubject, (tests) => Tests)
    @JoinColumn({ name: 'sub_pro_id' })
    professorsBySubject: ProfessorsBySubject;

    @ManyToOne((type) => Periods, (tests) => Tests)
    @JoinColumn({ name: 'period_id' })
    period: Periods;

    @ManyToOne((type) => Names, (tests) => Tests)
    @JoinColumn({ name: 'test_name_id' })
    name: Names;

    @ManyToOne((type) => Categories, (tests) => Tests)
    @JoinColumn({ name: 'category_id' })
    category: Categories;

    @ManyToMany((type) => Professors, (tests) => Tests)
    @JoinTable({
        name: 'professors_by_subject',
        joinColumn: {
            name: 'id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'professor_id',
            referencedColumnName: 'id',
        },
    })
    professor: Professors[];

    @ManyToMany((type) => Subjects, (tests) => Tests)
    @JoinTable({
        name: 'professors_by_subject',
        joinColumn: {
            name: 'id',
            referencedColumnName: 'id',
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id',
        },
    })
    subject: Subjects[];

    @Column()
    period_id: number;
}
