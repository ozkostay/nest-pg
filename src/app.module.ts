import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';

@Module({
  imports: [DatabaseModule, ConfigModule.forRoot(), UserModule, PhotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
