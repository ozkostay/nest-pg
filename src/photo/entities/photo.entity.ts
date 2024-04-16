import { Users } from 'src/user/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public fileName: string;
  
  @Column()
  public url: string;

  @ManyToOne(() => Users, (users) => users.photos)
  public users: Users;
}
