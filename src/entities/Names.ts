import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('names')
export default class Names {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      test_name: string;
}
