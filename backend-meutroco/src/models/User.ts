import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
class User{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string

}

export default User