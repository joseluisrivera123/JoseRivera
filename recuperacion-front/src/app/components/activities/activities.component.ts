import { Component, OnInit } from '@angular/core';
import { Activities } from '../../models/activities';
import { ActivitiesService } from '../../services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities: Activities[] = [];
  activity: Activities = new Activities();
  displayedColumns: string[] = ['name', 'description', 'activityDate', 'active', 'acciones'];
  isEditMode: boolean = false;

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit(): void {
    this.getActivities();
  }

  getActivities(): void {
    this.activitiesService.getAll().subscribe(data => {
      this.activities = data;
    });
  }

  saveActivity(): void {
    if (!this.isEditMode) {
      // Asignar valor predeterminado solo en la creación
      this.activity.active = 'A';
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
}
