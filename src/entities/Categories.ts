import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import Tests from './Tests';

@Entity('categories')
export default class Categories {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'category_name' })
    categoryName: string;

    @OneToMany((type) => Tests, (category) => Categories)
    tests: Tests[];
}
