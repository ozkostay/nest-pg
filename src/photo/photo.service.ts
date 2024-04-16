import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreatePhotoDto } from './dto/create-photo.dto';
import { UpdatePhotoDto } from './dto/update-photo.dto';
import { Photo } from './entities/photo.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from 'src/user/entities/user.entity';
// usersRepository: Repository<Users>,

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo) private photoRepository: Repository<Photo>,
    @InjectRepository(Users) private usersRepository: Repository<Users>,
  ) {}
  
  // create(createPhotoDto: CreatePhotoDto) {
  //   console.log('======', createPhotoDto);

  //   // return 'This action adds a new photo';
  //   // return this.photoRepository.save(createPhotoDto);
  //   return 'qqq'
  // }

  async createUserPhoto(id: number, createPhotoDto: CreatePhotoDto) {
    console.log('SERVICE id', id, 'DTO', createPhotoDto);
    const user = await this.usersRepository.findOneBy({ id });
    console.log('USER', user)
    if (!user)
      throw new HttpException(
        'User not found. Cannot create Profile',
        HttpStatus.BAD_REQUEST,
      );
    const newPhoto = this.photoRepository.create({
      ...createPhotoDto,
      users: user,
    });
    return this.photoRepository.save(newPhoto);
    return 'Photo add'

  }

  findAll() {
    return `This action returns all photo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} photo`;
  }

  update(id: number, updatePhotoDto: UpdatePhotoDto) {
    return `This action updates a #${id} photo`;
  }

  remove(id: number) {
    return `This action removes a #${id} photo`;
  }
}
