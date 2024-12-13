import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeenComponent } from './components/teen/teen.component';
import { FunctionaryComponent } from './components/functionary/functionary.component'
import { FunctionaryAdolescentComponent } from './components/functionary-adolescent/functionary-adolescent.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { FunctionaryTeenComponent } from './components/functionary-teen/functionary-teen.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },  // Redirige al componente Teen como ruta predeterminada
  { path: 'teen', component: TeenComponent } ,
  { path: 'functionary-teen', component: FunctionaryTeenComponent },
  { path: 'functionary-adolescent', component: FunctionaryAdolescentComponent }, // Ruta para acceder al componente
  {path: 'Activities', component: ActivitiesComponent},
  { path: 'functionary', component: FunctionaryComponent }, // Ruta para el componente Teen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

