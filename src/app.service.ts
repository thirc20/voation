import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return `<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Votation</title>
        <link rel="shortcut icon" href="../img/fadesa.png" type="image/x-icon">
    
        <!-- css BOOTSTRAP -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    
        <!-- LINK CSS -->
        <link rel="stylesheet" href="../CSS/votation.css">
        <link rel="stylesheet" href="../CSS/votationMobile.css">
    
        <!-- LINK FONTE -->
        <link href="https://fonts.cdnfonts.com/css/kenyan-coffee-2" rel="stylesheet">
    </head>
    
    <body>
        <header id="cabecalho">
            <div><img src="../img/fadesa.png" width="100"></div>
            <div id="title">
                <h2>FACULDADE PARA O DESENVOLVIMENTO SUSTENTÁVEL DA AMAZONIA</h2>
                <br>
                <h1>ESCOLHA O MELHOR PROFESSOR</h1>
            </div>
        </header>
    
        <main>
            <h3>BEM VINDO ALUNO!</h3>
    
            <label class="text"><label style="color: red;">*</label>DIGITE SEU RA</label>
            <input type="text" class="text form-control" id="RA_ALUNO" placeholder="Digite Aqui Seu RA">
    
            <label class="text "><label style="color: red;">*</label>SELECIONE SEU CURSO</label>
            <div id="cursosSelecao" class="text">
                <input type="radio" class="cursos" name="cursoDoAluno" value="adm">
                <label>ADMINISTRAÇÃO</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="ads">
                <label>ANALISE E DESENVOLVIMENTO DE SISTEMAS</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="cct">
                <label>CIÊNCIAS CONTÁBEIS</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="edf">
                <label>EDUCAÇÃO FÍSICA</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="enf">
                <label>ENFERMAGEM</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="dir">
                <label>DIREITO</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="ped">
                <label>PEDAGOGIA</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="psc">
                <label>PSICOLOGIA</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="nut">
                <label>NUTRIÇAO</label>
                <input type="radio" class="cursos" name="cursoDoAluno" value="odont">
                <label>ODONTOLOGIA</label>
            </div>
    
            <hr class="text">
    
            <label class="text"><label style="color: red;">*</label>SELECIONE O PROFESSOR</label></label>
            <select class="text form-select form-select-sm" aria-label=".form-select-sm example">
                <option selected="">Selecione Uma Opção</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
    
            <center><button class="text btn-confirmar btn-outline-light" onclick="votar()">CONFIRMAR</button></center>
        </main>
    
        <!-- Script BOOTSTRAP -->
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
            integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
            integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz"
            crossorigin="anonymous"></script>
    
        <script>
            function votar() {
                debugger
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open( "GET", "localhost:3000/" ); // false for synchronous request
                xmlHttp.send();
                return xmlHttp.responseText; 
            }
        </script>
    
    </body>
    
    </html>`
  }
}
