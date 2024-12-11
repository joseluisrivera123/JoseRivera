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
  displayedColumns: string[] = ['name', 'surnamefather', 'surnamemother', 'dni','acciones'];

  constructor(private teenService: TeenService) {}

  ngOnInit(): void {
    this.getTeens();
  }

  getTeens(): void {
    this.teenService.getAll().subscribe((data) => {
      this.teens = data.filter(teen => teen.estado === 'A'); // Filtrar solo los activos
    });
  }
  

  // Guardar o actualizar un adolescente
  saveTeen(): void {
    if (this.teen.idAdolescente) {
      // Actualización
      this.teenService.update(this.teen.idAdolescente, this.teen).subscribe(() => {
        this.getTeens();
        this.teen = new Teen(); // Resetear el formulario
        alert('Adolescente actualizado con éxito.');
      });
    } else {
      // Creación
      this.teenService.create(this.teen).subscribe(() => {
        this.getTeens();
        this.teen = new Teen(); // Resetear el formulario
        alert('Adolescente creado con éxito.');
      });
    }
  }

  editTeen(teen: Teen): void {
    this.teen = { ...teen }; // Copia los valores del teen seleccionado al formulario
  }
  
  deleteTeen(id: number): void {
    this.teenService.delete(id).subscribe(() => {
      this.getTeens(); // Refresca la lista después de eliminar
    });
  }
  }

