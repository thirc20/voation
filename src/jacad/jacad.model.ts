import { Module } from "@nestjs/common";
import { JacadService } from "./business/jacad.service";
import { JacadController } from "./controller/jacad.controller";


@Module({
    controllers: [JacadController],
    providers: [JacadService],
})

export class JacadModule{}