import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  // Importar las animaciones
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list'; 
import { AppComponent } from './app.component';
import { TeenComponent } from './components/teen/teen.component';
import { AppRoutingModule } from './app-routing.module';
import { FunctionaryComponent } from './components/functionary/functionary.component';
import { FunctionaryAdolescentComponent } from './components/functionary-adolescent/functionary-adolescent.component';
import { ActivitiesComponent } from './components/activities/activities.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FunctionaryTeenComponent } from './components/functionary-teen/functionary-teen.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
 // Importar el módulo de rutas

@NgModule({
  declarations: [
    AppComponent,
    TeenComponent,
    FunctionaryComponent,
    FunctionaryAdolescentComponent,
    ActivitiesComponent,
    FunctionaryTeenComponent,
    AsignacionComponent,

  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,    // Para el sidenav (menú lateral)
    MatInputModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule  // Agregar BrowserAnimationsModule aquí
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
