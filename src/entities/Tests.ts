import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
} from 'typeorm';
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

    @Column()
    period_id: number;
}
