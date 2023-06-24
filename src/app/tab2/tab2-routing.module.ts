import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab2Page } from './tab2.page';
import { CadastrarPage } from '../cadastrar/cadastrar.page';
import { EditarCursoPage } from '../editar-curso/editar-curso.page';

const routes: Routes = [
  {
    path: '',
    component: Tab2Page,
  },
  {
    path: 'cadastrar',
    component: CadastrarPage,
  },
  {
    path: 'editar-curso/:codigo',
    component: EditarCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
