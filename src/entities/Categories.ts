import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Tests from './Tests';

@Entity('categories')
export default class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    category_name: string;

    @OneToMany((type) => Tests, (category) => Categories)
    tests: Tests[];
}
