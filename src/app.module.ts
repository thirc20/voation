import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { pid } from 'process';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JacadModule } from './jacad/jacad.model';
import { VotoEntity } from './voto/entity/voto.entity';
import { VotoModule } from './voto/voto.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-06.cleardb.net',
      port: 3306,
      username: 'b17fdffeac6708',
      password: '6bac8b1a',
      database: 'heroku_6bb8b39f8bbe2fe',
      entities: [VotoEntity],
      synchronize: true,
    }),
    JacadModule,
    VotoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
