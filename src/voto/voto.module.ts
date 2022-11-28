import { Module } from "@nestjs/common";
import { VotoService } from "./business/voto.service";
import { VotoController } from "./controller/voto.controller";

@Module({
    controllers: [VotoController],
    providers: [VotoService],
})

export class VotoModule{}