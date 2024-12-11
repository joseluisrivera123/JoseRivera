import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { FunctionaryService } from 'src/app/services/functionary.service';
import { TeenService } from 'src/app/services/teen.service';
import { FunctionaryAdolescentService } from 'src/app/services/functionary-adolescent.service';

@Component({
  selector: 'app-functionary-adolescent',
  templateUrl: './functionary-adolescent.component.html',
  styleUrls: ['./functionary-adolescent.component.css']
})
export class FunctionaryAdolescentComponent implements OnInit {
  form: FormGroup;
  functionaries: any[] = [];
  teens: any[] = [];

  constructor(
    private fb: FormBuilder,
    private functionaryService: FunctionaryService,
    private teenService: TeenService,
    private functionaryAdolescentService: FunctionaryAdolescentService
  ) {
    this.form = this.fb.group({
      idFunctionary: [''],
      adolescents: this.fb.array([]),
    });
  }

  get adolescents(): FormArray {
    return this.form.get('adolescents') as FormArray;
  }

  ngOnInit(): void {
    this.functionaryService.getAll().subscribe((data) => (this.functionaries = data));
    this.teenService.getAll().subscribe((data) => (this.teens = data));
  }

  addAdolescent(adolescentId: any): void {
    this.adolescents.push(this.fb.control(adolescentId));
  }

  save(): void {
    this.functionaryAdolescentService.save(this.form.value).subscribe(() => {
      alert('Asignación guardada correctamente');
      this.form.reset();
    });
  }
}

