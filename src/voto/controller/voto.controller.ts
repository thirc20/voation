import { Body, Controller, Post } from "@nestjs/common";
import { VotoService } from "../business/voto.service";

@Controller('voto')
export class VotoController{
    constructor(private votoService: VotoService){}
    @Post()
    async contVoto(@Body() infoRa: any){
        return await this.votoService.voto(infoRa)
    }
}