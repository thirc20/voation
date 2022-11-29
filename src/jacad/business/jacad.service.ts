import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from "axios";
import FormData = require('form-data')
import fetch from 'node-fetch';
import { VotoService } from "src/voto/business/voto.service";


@Injectable()
export class JacadService{
    constructor(private voto: VotoService){}
    async findStudent(ra:any){

        let req = await axios.post(`https://fadesa.jacad.com.br:443/academico/api/v1/academico/aluno/matriculas/matriculas/listar/?token=7e0f509d3841516ee8a3b857d452d21b&format=JSON&nomeAluno=${ra.nomeAluno}`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((res)=>{
            return res
        })
        .catch((err)=>{console.log(err);})

        return this.validateStudent(req, ra)
    }

    async validateStudent(infor: any, ra){
        infor = infor.data
        for(let count = 0; count < infor.length; count++){
            let nome = infor[count].nome.toUpperCase()
            let raAluno = infor[count].ra
            let cursoAluno = infor[count].curso

            let nomeInformado = ra.nomeAluno.toUpperCase()
            let raInformado = ra.raAluno
            let cursoInformado = ra.curso

            if(nome == nomeInformado && raAluno == raInformado && cursoAluno == cursoInformado){
                count = infor.length
                return this.voto.voto(ra)
            }
            else{
                return {
                    message: "Não foi possível validar seu voto, aluno não encontrado ou curso está divergente da sua matrícula! Verifique as informações e tente novamente.",
                }
        }
        }
    }
}