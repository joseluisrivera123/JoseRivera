import { TestBed } from '@angular/core/testing';

import { FunctionaryAdolescentService } from './functionary-adolescent.service';

describe('FunctionaryAdolescentService', () => {
  let service: FunctionaryAdolescentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionaryAdolescentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
