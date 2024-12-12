import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeenComponent } from './components/teen/teen.component';
import { FunctionaryComponent } from './components/functionary/functionary.component'
import { FunctionaryAdolescentComponent } from './components/functionary-adolescent/functionary-adolescent.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },  // Redirige al componente Teen como ruta predeterminada
  { path: 'teen', component: TeenComponent } ,
  { path: 'functionary-adolescent', component: FunctionaryAdolescentComponent }, // Ruta para acceder al componente
  // Puedes añadir otras rutas aquí según tus necesidades.
  { path: 'functionary', component: FunctionaryComponent }, // Ruta para el componente Teen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

