import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JacadModule } from './jacad/jacad.model';

@Module({
  imports: [JacadModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
