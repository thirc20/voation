import { Body, Controller, Get, Post, Req  } from "@nestjs/common";
import { JacadService } from "../business/jacad.service";

@Controller('jacad')
export class JacadController{
    constructor(private jacadService: JacadService){}
    @Post()
    async findRA(@Body() raStudent:any){        
        return await this.jacadService.findStudent(raStudent)
    }
}