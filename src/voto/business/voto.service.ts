import { Injectable } from "@nestjs/common";
import { VotoModel } from "../model/voto.model";

@Injectable()
export class VotoService{
    constructor(private votoModel: VotoModel){}
    async voto(inforVoto: any){
        let votoVerificado = await this.verificarVotoExistente(inforVoto)
        
        if(votoVerificado == "livre"){
            return await this.novoVoto(inforVoto)
        }else{
            return "Você já votou!"
        }

    }

    async verificarVotoExistente(inforVoto: any){
        let votoExistente:any = await this.votoModel.findOne(inforVoto.nomeAluno)
        if(votoExistente.message == "Voto ainda não realizado"){
            return "livre"
        }
        else{
            return "Voto já realizado!"
        }

    }

    async novoVoto(voto){
        return this.votoModel.novoVoto(voto)
    }
}