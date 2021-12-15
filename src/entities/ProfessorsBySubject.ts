import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professors_by_subject')
export default class ProfessorsBySubject {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      subject_id: number;

    @Column()
      professor_id: number;
}
