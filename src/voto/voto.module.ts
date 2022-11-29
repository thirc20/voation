import { Module } from "@nestjs/common";
import { VotoService } from "./business/voto.service";
import { VotoController } from "./controller/voto.controller";
import { TypeOrmModule } from '@nestjs/typeorm';
import { VotoEntity } from "./entity/voto.entity";
import { VotoModel } from "./model/voto.model";


@Module({
    imports: [TypeOrmModule.forFeature([VotoEntity])],
    controllers: [VotoController],
    providers: [VotoService, VotoModel],
})

export class VotoModule{}