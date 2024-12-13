import { TestBed } from '@angular/core/testing';

import { FunctionaryTeenService } from './functionary-teen.service';

describe('FunctionaryTeenService', () => {
  let service: FunctionaryTeenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionaryTeenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
