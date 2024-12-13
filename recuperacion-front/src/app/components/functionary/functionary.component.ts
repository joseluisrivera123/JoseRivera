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
  displayedColumns: string[] = ['name', 'surnamefather', 'surnamemother', 'dni', 'phonenumber', 'range','confirmation' ,'department', 'address','email','acciones'];

  constructor(private functionaryService: FunctionaryService) {}

  ngOnInit(): void {
    this.getFunctionaries();
  }

  // Obtener los funcionarios activos
  getFunctionaries(): void {
    this.functionaryService.getAll().subscribe((data) => {
      this.functionaries = data.filter(f => f.status === 'A'); // Solo activos
    });
  }

  // Guardar un nuevo funcionario o actualizar uno existente
  saveFunctionary(): void {
    if (!this.functionary.idFuncionary) {
      this.functionary.status = 'A'; // Estado predeterminado (activo)
      this.functionaryService.create(this.functionary).subscribe(() => {
        this.getFunctionaries();
        this.functionary = new Functionary();  // Limpiar formulario
      });
    } else {
      this.functionaryService.update(this.functionary.idFuncionary, this.functionary).subscribe(() => {
        this.getFunctionaries();
        this.functionary = new Functionary();  // Limpiar formulario
      });
    }
  }

  // Editar un funcionario para actualizar
  editFunctionary(functionary: Functionary): void {
    this.functionary = { ...functionary };  // Copiar datos del funcionario seleccionado
  }

  // Eliminar un funcionario (cambiar el estado a inactivo)
  deleteFunctionary(id: number): void {
    this.functionaryService.delete(id).subscribe(() => {
      this.getFunctionaries();  // Actualizar la lista después de eliminar
    });
  }
}
