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
  selectedFunctionary: number | null = null;
  selectedTeens: number[] = [];
  description: string = '';
  associations: any[] = [];
  apiUrl = 'http://localhost:8080/api/functionary-teen'; // Cambiar si el backend tiene otra URL

  displayedColumns: string[] = ['id', 'functionaryName', 'teensNames', 'description', 'estado', 'actions'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadFunctionaries();
    this.loadTeens();
    this.loadAssociations();
  }

  loadFunctionaries(): void {
    this.http.get<any[]>('http://localhost:8080/api/functionary').subscribe(data => {
      this.functionaries = data;
    });
  }

  loadTeens(): void {
    this.http.get<any[]>('http://localhost:8080/api/teen').subscribe(data => {
      this.teens = data;
    });
  }

  loadAssociations(): void {
    this.http.get<any[]>(this.apiUrl).subscribe(data => {
      this.associations = data.map(assoc => ({
        ...assoc,
        teensNames: assoc.teens ? assoc.teens.map((teen: any) => teen.name).join(', ') : ''
      }));
    });
  }

  submit(): void {
    if (!this.selectedFunctionary || this.selectedTeens.length === 0 || !this.description) {
      alert('Por favor completa todos los campos.');
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

  clearForm(): void {
    this.selectedFunctionary = null;
    this.selectedTeens = [];
    this.description = '';
  }
}
