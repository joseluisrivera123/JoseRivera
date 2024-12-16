import { Component, OnInit } from '@angular/core';
import { Teen } from '../../models/teen';
import { TeenService } from '../../services/teen.service';
import * as XLSX from 'xlsx'; // Biblioteca para Excel
import jsPDF from 'jspdf'; // Biblioteca para PDF
import 'jspdf-autotable'; // Extensión para tablas en PDF
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-teen',
  templateUrl: './teen.component.html',
  styleUrls: ['./teen.component.css'],
})
export class TeenComponent implements OnInit {
  teens: Teen[] = [];
  teen: Teen = new Teen();
  displayedColumns: string[] = [
    'name',
    'surnamefather',
    'surnamemother',
    'dni',
    'acciones',
  ];
  isEditMode: boolean = false;

  constructor(private teenService: TeenService) {}

  ngOnInit(): void {
    this.getTeens();
  }

  getTeens(): void {
    this.teenService.getAll().subscribe((data) => {
      this.teens = data; // Aquí obtienes todos los datos
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
    this.isEditMode = true;
  }

  deleteTeen(id: number): void {
    this.teenService.delete(id).subscribe(() => {
      this.getTeens();
    });
  }

  toggleEstado(teen: Teen): void {
    teen.estado = teen.estado === 'A' ? 'I' : 'A';
    this.teenService.update(teen.idAdolescente!, teen).subscribe(() => {
      this.getTeens();
    });
  }

  resetForm(): void {
    this.teen = new Teen();
    this.isEditMode = false;
  }

  // Exportar a Excel
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.teens); // Convierte los datos a hoja de Excel
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    XLSX.writeFile(workbook, 'Reporte_Adolescentes.xlsx'); // Guarda el archivo
  }

  // Exportar a PDF
  exportToPDF(): void {
    const doc = new jsPDF();
    doc.text('Reporte de Adolescentes', 10, 10);
  
    const tableColumn = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'DNI', 'Estado'];
    const tableRows = this.teens.map((teen) => [
      teen.name,
      teen.surnamefather,
      teen.surnamemother,
      teen.dni,
      teen.estado === 'A' ? 'Activo' : 'Inactivo',
    ]);
  
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });
  
    doc.save('Reporte_Adolescentes.pdf');
  }
  
}
