import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '../curso/curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  url =  environment.BaseUrl;

  constructor( private http: HttpClient ) { }

  salvarCursos(cursos:Curso){
    return this.http.post(this.url+"/curso", cursos);
  }

  actualizarCursos(cursos:Curso){
    return this.http.put(this.url+"/curso", cursos);
  }

  todoCursos(){
    return this.http.get(this.url+"/curso");
  }

  buscarCurso(codigo: number){
    return this.http.get(this.url+  "/curso/" +codigo);

  }

  deletaCurso(codigo: number){
    return this.http.delete(this.url+"/curso/" +codigo);
  }



}
