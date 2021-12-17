import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import Categories from './Categories';
import Names from './Names';
import Periods from './Periods';
import ProfessorsBySubject from './ProfessorsBySubject';

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

    @Column()
    period_id: number;

    @ManyToOne((type) => ProfessorsBySubject, (tests) => Tests)
    professorsBySubject: ProfessorsBySubject;

    @ManyToOne((type) => Periods, (tests) => Tests)
    period: Periods;

    @ManyToOne((type) => Names, (tests) => Tests)
    name: Names;

    @ManyToOne((type) => Categories, (tests) => Tests)
    category: Categories;
}
