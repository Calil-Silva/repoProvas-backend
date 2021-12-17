import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Tests from './Tests';

@Entity('periods')
export default class Periods {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    period_name: string;

    @OneToMany((type) => Tests, (period) => Periods)
    tests: Tests[];
}
