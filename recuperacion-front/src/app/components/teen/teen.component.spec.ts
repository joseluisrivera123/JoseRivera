import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeenComponent } from './teen.component';

describe('TeenComponent', () => {
  let component: TeenComponent;
  let fixture: ComponentFixture<TeenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeenComponent]
    });
    fixture = TestBed.createComponent(TeenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
