import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users} from './entities/user.entity';
import { CreatePhotoDto } from 'src/photo/dto/create-photo.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  create(createUserDto: CreateUserDto) {
    // return 'This action adds a new user';
    // return this.usersRepository.create({});
    // const newUser = this.usersRepository.create({ firstName: '333', lastName: '444' });
    console.log(createUserDto);
    return this.usersRepository.save(createUserDto);
  }

  
  findAll(): Promise<Users[]> {
    console.log('== Sevise USER');
    return this.usersRepository.find({
      select: {
          firstName: true,
          lastName: true,
      },
      relations: ['photos']
  });
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
