import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import path from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  
  getHrootello(@Res() res: Response){
    // console.log(__dirname)
    // let caminho = __dirname.replace('dist', '')
    // console.log(caminho);
    return this.appService.getHello()
  }
}
