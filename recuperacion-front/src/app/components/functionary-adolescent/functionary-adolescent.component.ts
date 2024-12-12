import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FunctionaryAdolescentService } from '../../services/functionary-adolescent.service';

@Component({
  selector: 'app-functionary-adolescent',
  templateUrl: './functionary-adolescent.component.html',
  styleUrls: ['./functionary-adolescent.component.css']
})
export class FunctionaryAdolescentComponent implements OnInit {
  functionaryAdolescentForm!: FormGroup;
  functionaries: any[] = []; // Lista de funcionarios
  teens: any[] = []; // Lista de adolescentes
  assignments: any[] = []; // Lista de asignaciones existentes

  constructor(
    private fb: FormBuilder,
    private functionaryAdolescentService: FunctionaryAdolescentService
  ) {}

  ngOnInit(): void {
    this.functionaryAdolescentForm = this.fb.group({
      id_funcionary: ['', Validators.required],
      id_adolescents: [[], Validators.required],
      description: ['', Validators.required]
    });

    this.loadFunctionaries();
    this.loadTeens();
    this.loadAssignments();
  }

  loadFunctionaries(): void {
    this.functionaryAdolescentService.getFunctionaries().subscribe(data => {
      this.functionaries = data;
    });
  }

  loadTeens(): void {
    this.functionaryAdolescentService.getTeens().subscribe(data => {
      this.teens = data;
    });
  }

  loadAssignments(): void {
    this.functionaryAdolescentService.getAssignments().subscribe(data => {
      this.assignments = data;
    });
  }

  onSubmit(): void {
    if (this.functionaryAdolescentForm.valid) {
      this.functionaryAdolescentService
        .assignTeensToFunctionary(this.functionaryAdolescentForm.value)
        .subscribe(() => {
          this.loadAssignments(); // Refresca la lista
          this.functionaryAdolescentForm.reset();
        });
    }
  }
}
