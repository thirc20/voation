import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JacadModule } from './jacad/jacad.model';
import { VotoEntity } from './voto/entity/voto.entity';
import { VotoModule } from './voto/voto.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'votation',
      entities: [VotoEntity],
      synchronize: true,
    }),
    JacadModule,
    VotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
