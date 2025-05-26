import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SortingModule } from './sorting/sorting.module';

@Module({
  imports: [SortingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
