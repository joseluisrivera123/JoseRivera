import { Component, OnInit } from '@angular/core';
import { Teen } from '../../models/teen';
import { TeenService } from '../../services/teen.service';

@Component({
  selector: 'app-teen',
  templateUrl: './teen.component.html',
  styleUrls: ['./teen.component.css']
})
export class TeenComponent implements OnInit {
  teens: Teen[] = [];
  teen: Teen = new Teen();
  displayedColumns: string[] = ['name', 'surnamefather', 'surnamemother', 'dni', 'estado', 'acciones'];
  isEditMode: boolean = false; // Nueva propiedad para identificar el modo

  constructor(private teenService: TeenService) {}

  ngOnInit(): void {
    this.getTeens();
  }

  getTeens(): void {
    this.teenService.getAll().subscribe((data) => {
      this.teens = data.filter(teen => teen.estado === 'A'); // Filtrar solo los activos
    });
  }

  saveTeen(): void {
    if (this.isEditMode && this.teen.idAdolescente) {
      // Actualización
      this.teenService.update(this.teen.idAdolescente, this.teen).subscribe(() => {
        this.getTeens();
        this.resetForm();
        alert('Adolescente actualizado con éxito.');
      });
    } else {
      // Creación
      this.teenService.create(this.teen).subscribe(() => {
        this.getTeens();
        this.resetForm();
        alert('Adolescente creado con éxito.');
      });
    }
  }
  

  editTeen(teen: Teen): void {
    this.teen = { ...teen }; // Copia los valores del adolescente seleccionado al formulario
    this.isEditMode = true; // Cambiar a modo edición
  }

  deleteTeen(id: number): void {
    this.teenService.delete(id).subscribe(() => {
      this.getTeens(); // Refresca la lista después de eliminar
    });
  }

  toggleEstado(teen: Teen): void {
    teen.estado = teen.estado === 'A' ? 'I' : 'A';
    this.teenService.update(teen.idAdolescente!, teen).subscribe(() => {
      this.getTeens(); // Refresca la lista después de cambiar el estado
    });
  }

  resetForm(): void {
    this.teen = new Teen(); // Resetea el formulario
    this.isEditMode = false; // Cambiar a modo creación
  }
}
