import { Module } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './entities/photo.entity';
import { UserService } from 'src/user/user.service';
import { Users } from 'src/user/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Photo, Users])],
  controllers: [PhotoController],
  providers: [PhotoService, UserService],
})
export class PhotoModule {}
