import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Tests from './Tests';

@Entity('periods')
export default class Periods {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'period_name' })
    periodName: string;

    @OneToMany((type) => Tests, (period) => Periods)
    tests: Tests[];
}
