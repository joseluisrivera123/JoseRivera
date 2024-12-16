import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionaryComponent } from './functionary.component';

describe('FunctionaryComponent', () => {
  let component: FunctionaryComponent;
  let fixture: ComponentFixture<FunctionaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionaryComponent]
    });
    fixture = TestBed.createComponent(FunctionaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
