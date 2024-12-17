import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionaryAdolescentComponent } from './functionary-adolescent.component';

describe('FunctionaryAdolescentComponent', () => {
  let component: FunctionaryAdolescentComponent;
  let fixture: ComponentFixture<FunctionaryAdolescentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionaryAdolescentComponent]
    });
    fixture = TestBed.createComponent(FunctionaryAdolescentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
