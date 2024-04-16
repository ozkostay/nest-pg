import { Photo } from 'src/photo/entities/photo.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ default: true })
  public isActive: boolean;

  @OneToMany(() => Photo, (photo) => photo.users)
  public photos: Photo;
}
