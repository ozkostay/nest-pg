import { Column, PrimaryGeneratedColumn } from "typeorm"

export class CreatePhotoDto {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fileName: string

    @Column()
    url: string

    @Column()
    users: number
}
