import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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
}
