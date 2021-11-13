import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export default class File {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  disk: string

  @CreateDateColumn({
    type: 'timestamp'
  })
  created_at: Date

  @UpdateDateColumn({
    type: 'timestamp'
  })
  updated_at: Date

}