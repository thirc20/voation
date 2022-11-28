import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import axios from "axios";
import FormData = require('form-data')
import fetch from 'node-fetch';


@Injectable()
export class JacadService{
    constructor(){
        
    }
    async findStudent(ra:any){

        let req = await axios.post("https://fadesa.jacad.com.br:443/academico/api/v1/academico/aluno/matriculas/matriculas/listar/?token=7e0f509d3841516ee8a3b857d452d21b&format=JSON&nomeAluno=MATHEUS FERNANDES",{
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
            let nome = infor[count].nome
            let raAluno = infor[count].ra

            let nomeInformado = ra.nome.toUpperCase()
            let raInformado = ra.ra

            if(nome == nomeInformado && raAluno == raInformado){
                count = infor.length
                return 
            }
            else{
                return {
                    message: "Não foi possível validar seu voto, aluno não encontrado! Verifique as informações e tente novamente.",
                }
        }
        }
    }
}