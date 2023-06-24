import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso/curso';
import { CursoService } from '../service/curso.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage implements OnInit {

  curso = new Curso();

  constructor( private cursoService: CursoService ){}

  ngOnInit(){

  }

  salvarCursos(){
    this.cursoService.salvarCursos( this.curso ).subscribe((response)=>{
      console.log(response);
      this.curso = new Curso();
    } );
  }
}
