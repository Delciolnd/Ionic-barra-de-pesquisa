import { Component } from '@angular/core';
import { Curso } from '../curso/curso';
import { CursoService } from '../service/curso.service';



@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  curso : Curso[];
  cursoFiltrado: Curso[];


  constructor( private cursoServive: CursoService) {}

  ngOnInit() {
    this.cursoServive.todoCursos().subscribe((response: any) => {
      this.curso = response;
      
  this.cursoFiltrado = response; // Inicializa o cursoFiltrado com a lista completa de cursos
    });
  }

  filtrarCursos(event: any) {
    const textoPesquisa = event.detail.value;
  
    if (textoPesquisa && textoPesquisa.trim() !== '') {
      this.cursoFiltrado = this.curso.filter((c: any) => {
        // Aqui você pode ajustar a lógica de filtragem com base nos campos do curso
        return c.nome.toLowerCase().includes(textoPesquisa.toLowerCase());
      });
    } else {
      this.cursoFiltrado = this.curso; // Se a barra de pesquisa estiver vazia, exibe todos os cursos
    }
  }
  
  

  deletarCurso( codigo: number ){
    this.cursoServive.deletaCurso( codigo ).subscribe( (response) => {
        console.log(response);

        this.curso = this.curso.filter( (c: any) =>{
          return codigo != c.codigo;
        } );
    } ) ;

}

}
