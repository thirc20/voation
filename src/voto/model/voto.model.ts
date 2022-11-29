import { Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { VotoEntity } from "../entity/voto.entity";
import { Repository } from 'typeorm';

@Injectable()
export class VotoModel{
    constructor(@InjectRepository(VotoEntity) private votoRepository: Repository<VotoEntity>){}

    async findOne(nome:any){
        let votoExistente:any = await this.votoRepository.find()

        for(let count = 0; count < votoExistente.length; count++){
            if(votoExistente[count].nomeAluno == nome){
                return {
                    nomeAluno: votoExistente[0].nomeAluno,
                    raAluno: votoExistente[0].raAluno,
                    votoProf: votoExistente[0].votoProf
                }
            }
        }
        return {
            message: "Voto ainda não realizado"
        }
    }

    async novoVoto(voto:any){
        let votoSalvo = await this.votoRepository.save(voto)

        return {
            nomeAluno: votoSalvo.nomeAluno,
            raAluno: votoSalvo.raAluno,
            votoProf: votoSalvo.votoProf
        }
    }
}