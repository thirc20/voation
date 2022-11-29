import { Module } from "@nestjs/common";
import { VotoService } from "src/voto/business/voto.service";
import { VotoModule } from "src/voto/voto.module";
import { JacadService } from "./business/jacad.service";
import { JacadController } from "./controller/jacad.controller";


@Module({
    imports: [VotoModule],
    controllers: [JacadController],
    providers: [JacadService],
})

export class JacadModule{}