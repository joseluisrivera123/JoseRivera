import { Component, OnInit } from '@angular/core';
import { Functionary } from '../../models/functionary';
import { FunctionaryService } from '../../services/functionary.service';
import * as XLSX from 'xlsx'; // Biblioteca para Excel
import jsPDF from 'jspdf'; // Biblioteca para PDF
import autoTable from 'jspdf-autotable'; // Extensión para tablas en PDF

@Component({
  selector: 'app-functionary',
  templateUrl: './functionary.component.html',
  styleUrls: ['./functionary.component.css']
})
export class FunctionaryComponent implements OnInit {
  functionaries: Functionary[] = [];
  functionary: Functionary = new Functionary();
  displayedColumns: string[] = ['name', 'surnamefather', 'surnamemother', 'dni', 'phonenumber', 'range', 'confirmation', 'department', 'address', 'email', 'acciones'];

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

  saveFunctionary(): void {
    if (!this.functionary.idFuncionary) {
      this.functionary.status = 'A';
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
    this.functionary = { ...functionary };
  }

  deleteFunctionary(id: number): void {
    this.functionaryService.delete(id).subscribe(() => {
      this.getFunctionaries();
    });
  }

  // Exportar a Excel
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.functionaries);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'Reporte_Funcionarios.xlsx');
  }

  // Exportar a PDF
  exportToPDF(): void {
    const doc = new jsPDF();
    doc.text('Reporte de Funcionarios', 10, 10);

    const tableColumn = ['Nombre', 'Apellido Paterno', 'Apellido Materno', 'DNI', 'Teléfono', 'Rango', 'Departamento', 'Dirección', 'Correo'];
    const tableRows = this.functionaries.map(f => [
      f.name,
      f.surnamefather,
      f.surnamemother,
      f.dni,
      f.phonenumber,
      f.range || '-',
      f.department || '-',
      f.address || '-',
      f.email || '-',
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('Reporte_Funcionarios.pdf');
  }
}
