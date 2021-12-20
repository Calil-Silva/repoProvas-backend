import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Tests from './Tests';

@Entity('names')
export default class Names {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    test_name: string;

    @OneToMany((type) => Tests, (name) => Names)
    tests: Tests[];
}
