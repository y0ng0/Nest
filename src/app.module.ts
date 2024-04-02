import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadController } from './file-upload/file-upload.controller';

@Module({
  imports: [],
  controllers: [AppController, FileUploadController],
  providers: [AppService],
})
export class AppModule {}
