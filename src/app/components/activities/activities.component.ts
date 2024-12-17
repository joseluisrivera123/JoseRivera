import { Component, OnInit } from '@angular/core';
import { Activities } from '../../models/activities';
import { ActivitiesService } from '../../services/activities.service';
import * as XLSX from 'xlsx'; // Biblioteca para Excel
import jsPDF from 'jspdf'; // Biblioteca para PDF
import autoTable from 'jspdf-autotable'; // Extensión para tablas en PDF
import 'jspdf-autotable';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activities[] = [];
  activity: Activities = new Activities();
  displayedColumns: string[] = [
    'name',
    'description',
    'activityDate',
    'duration',
    'location',
    'typePronacej',
    'typeSoa',
    'active',
    'acciones',
  ];
  isEditMode: boolean = false;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activitiesService.getAll().subscribe((data) => {
      this.activities = data;
    });
  }

  saveActivity(): void {
    if (!this.isEditMode) {
      this.activity.active = 'A'; // Asignar estado predeterminado en creación
    }

    if (this.isEditMode && this.activity.id) {
      this.activitiesService.update(this.activity.id, this.activity).subscribe(() => {
        this.getActivities();
        this.resetForm();
        alert('Actividad actualizada con éxito.');
      });
    } else {
      this.activitiesService.create(this.activity).subscribe(() => {
        this.getActivities();
        this.resetForm();
        alert('Actividad creada con éxito.');
      });
    }
  }

  editActivity(activity: Activities): void {
    this.activity = { ...activity };
    this.isEditMode = true;
  }

  deleteActivity(id: number): void {
    this.activitiesService.delete(id).subscribe(() => {
      this.getActivities();
    });
  }

  resetForm(): void {
    this.activity = new Activities();
    this.isEditMode = false;
  }

  // Exportar a Excel
  exportToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.activities); // Convierte los datos a hoja de Excel
    const workbook: XLSX.WorkBook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
    XLSX.writeFile(workbook, 'Reporte_Actividades.xlsx'); // Guarda el archivo
  }

  // Exportar a PDF
  exportToPDF(): void {
    const doc = new jsPDF();
    doc.text('Reporte de Actividades', 10, 10);

    const tableColumn = [
      'Nombre',
      'Descripción',
      'Fecha',
      'Duración',
      'Ubicación',
      'Tipo Pronacej',
      'Tipo SOA',
      'Estado',
    ];
    const tableRows = this.activities.map((activity) => [
      activity.name,
      activity.description,
      activity.activityDate,
      activity.duration,
      activity.location,
      activity.typePronacej,
      activity.typeSoa,
      activity.active === 'A' ? 'Activo' : 'Inactivo',
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 20,
    });

    doc.save('Reporte_Actividades.pdf');
  }
}
