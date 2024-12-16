import { TestBed } from '@angular/core/testing';

import { FunctionaryService } from './functionary.service';

describe('FunctionaryService', () => {
  let service: FunctionaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunctionaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
