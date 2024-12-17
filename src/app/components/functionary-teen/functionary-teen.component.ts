import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-functionary-teen',
  templateUrl: './functionary-teen.component.html',
  styleUrls: ['./functionary-teen.component.css']
})
export class FunctionaryTeenComponent implements OnInit {
  functionaries: any[] = [];
  teens: any[] = [];
  associations: any[] = [];

  selectedFunctionary: number | null = null;
  selectedTeens: number[] = [];
  description: string = '';
  apiUrl = 'http://localhost:8080/api/functionary-teen'; // Backend URL

  displayedColumns: string[] = ['id', 'functionaryName', 'teenName', 'description', 'actions'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFunctionaries();
    this.loadTeens();
    this.loadAssociations();
  }

  // Cargar Funcionarios
  loadFunctionaries(): void {
    this.http.get<any[]>('http://localhost:8080/api/functionaries').subscribe(data => {
      this.functionaries = data;
    });
  }

  // Cargar Adolescentes
  loadTeens(): void {
    this.http.get<any[]>('http://localhost:8080/api/teens').subscribe(data => {
      this.teens = data;
    });
  }

  // Cargar Asociaciones
  loadAssociations(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.associations = data.map(assoc => ({
        ...assoc,
        functionaryName: assoc.idFuncionary, // Mostrar id del funcionario
        teenName: assoc.idAdolescente, // Mostrar id del adolescente
      }));
    });
  }

  // Crear una nueva asociación
  submit(): void {
    if (!this.selectedFunctionary || this.selectedTeens.length === 0 || !this.description) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const body = {
      idFunctionary: this.selectedFunctionary,
      idTeen: this.selectedTeens,
      description: this.description
    };

    this.http.post(this.apiUrl, body).subscribe(
      () => {
        alert('Relación creada exitosamente.');
        this.loadAssociations();
        this.clearForm();
      },
      error => {
        alert('Error al crear la relación.');
        console.error(error);
      }
    );
  }

  // Eliminar asociación
  deleteAssociation(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(
      () => {
        alert('Relación eliminada.');
        this.loadAssociations();
      },
      error => {
        alert('Error al eliminar la relación.');
        console.error(error);
      }
    );
  }

  // Limpiar el formulario
  clearForm(): void {
    this.selectedFunctionary = null;
    this.selectedTeens = [];
    this.description = '';
  }
}
