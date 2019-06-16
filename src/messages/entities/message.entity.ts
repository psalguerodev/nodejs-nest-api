import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Message {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  message: string;
}
