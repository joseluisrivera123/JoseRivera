import { Component, OnInit } from '@angular/core';
import { Teen } from '../../models/teen';
import { Functionary } from '../../models/functionary';
import { Asignacion } from '../../models/asignacion';
import { TeenService } from '../../services/teen.service';
import { FunctionaryService } from '../../services/functionary.service';
import { AsignacionService } from '../../services/asignacion.service';
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable, { RowInput } from 'jspdf-autotable';

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css'],
})
export class AsignacionComponent implements OnInit {
  asignacion: Asignacion = new Asignacion();
  asignaciones: Asignacion[] = [];
  funcionarios: Functionary[] = [];
  teens: Teen[] = [];

  displayedColumns: string[] = ['id', 'funcionario', 'adolescente', 'description', 'acciones'];

  constructor(
    private teenService: TeenService,
    private functionaryService: FunctionaryService,
    private asignacionService: AsignacionService
  ) {}

  ngOnInit(): void {
    this.loadTeens();
    this.loadFuncionarios();
    this.loadAsignaciones();
  }

  loadTeens(): void {
    this.teenService.getAll().subscribe((data) => (this.teens = data));
  }

  loadFuncionarios(): void {
    this.functionaryService.getAll().subscribe((data) => (this.funcionarios = data));
  }

  loadAsignaciones(): void {
    this.asignacionService.getAll().subscribe((data) => {
      this.asignaciones = data.map((asignacion) => {
        // Buscar los nombres en las listas de funcionarios y adolescentes
        const funcionario = this.funcionarios.find(
          (f) => f.idFuncionary === asignacion.idFuncionary
        );
        const adolescente = this.teens.find(
          (t) => t.idAdolescente === asignacion.idAdolescente
        );
  
        return {
          ...asignacion,
          funcionarioName: funcionario
            ? `${funcionario.name} ${funcionario.surnamefather}`
            : 'Desconocido',
          adolescenteName: adolescente
            ? `${adolescente.name} ${adolescente.surnamefather}`
            : 'Desconocido',
        };
      });
    });
  }
  

  saveAsignacion(): void {
    if (this.asignacion.id) {
      // Actualizar asignación existente
      this.asignacionService.update(this.asignacion.id, this.asignacion).subscribe(() => {
        this.resetForm();
        this.loadAsignaciones();
        alert('Asignación actualizada.');
      });
    } else {
      // Crear nueva asignación
      this.asignacionService.create(this.asignacion).subscribe(() => {
        this.resetForm();
        this.loadAsignaciones();
        alert('Asignación creada.');
      });
    }
  }

  deleteAsignacion(id: number): void {
    this.asignacionService.delete(id).subscribe(() => {
      this.loadAsignaciones();
      alert('Asignación eliminada.');
    });
  }

  resetForm(): void {
    this.asignacion = new Asignacion();
  }

  

  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.asignaciones);
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'Reporte_Asignaciones.xlsx');
  }

  exportToPDF(): void {
    const doc = new jsPDF();
    doc.text('Reporte de Asignaciones', 10, 10);
  
    const tableColumn = ['ID', 'Funcionario', 'Adolescente', 'Descripción'];
    const tableRows: RowInput[] = this.asignaciones.map((asignacion) => [
      asignacion.id ?? '',
      asignacion.funcionarioName ?? '',
      asignacion.adolescenteName ?? '',
      asignacion.description ?? '',
    ]);
  
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows, // Ahora RowInput[] tiene el tipo correcto
      startY: 20,
    });
  
    doc.save('Reporte_Asignaciones.pdf');
  }
  
}

