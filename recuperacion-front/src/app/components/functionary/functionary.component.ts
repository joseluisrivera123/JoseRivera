import { Component, OnInit } from '@angular/core';
import { Functionary } from '../../models/functionary';
import { FunctionaryService } from '../../services/functionary.service';

@Component({
  selector: 'app-functionary',
  templateUrl: './functionary.component.html',
  styleUrls: ['./functionary.component.css']
})
export class FunctionaryComponent implements OnInit {
  functionaries: Functionary[] = [];
  functionary: Functionary = new Functionary();
  displayedColumns: string[] = ['name', 'surnamefather', 'surnamemother', 'dni', 'phonenumber', 'range', 'department', 'acciones'];

  constructor(private functionaryService: FunctionaryService) {}

  ngOnInit(): void {
    this.getFunctionaries();
  }

  getFunctionaries(): void {
    this.functionaryService.getAll().subscribe((data) => {
      this.functionaries = data.filter(f => f.status === 'A'); // Solo activos
    });
  }

  saveFunctionary(): void {
    if (!this.functionary.idFuncionary) {
      this.functionary.status = 'A'; // Estado predeterminado
      this.functionaryService.create(this.functionary).subscribe(() => {
        this.getFunctionaries();
        this.functionary = new Functionary();
      });
    } else {
      this.functionaryService.update(this.functionary.idFuncionary, this.functionary).subscribe(() => {
        this.getFunctionaries();
        this.functionary = new Functionary();
      });
    }
  }

  editFunctionary(functionary: Functionary): void {
    this.functionary = { ...functionary }; // Editar registro
  }

  deleteFunctionary(id: number): void {
    this.functionaryService.delete(id).subscribe(() => {
      this.getFunctionaries();
    });
  }
}
