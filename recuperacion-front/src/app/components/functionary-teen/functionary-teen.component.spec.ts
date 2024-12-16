import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionaryTeenComponent } from './functionary-teen.component';

describe('FunctionaryTeenComponent', () => {
  let component: FunctionaryTeenComponent;
  let fixture: ComponentFixture<FunctionaryTeenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FunctionaryTeenComponent]
    });
    fixture = TestBed.createComponent(FunctionaryTeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
