import { TestBed } from '@angular/core/testing';

import { ContaaserviceService } from './contaaservice.service';

describe('ContaaserviceService', () => {
  let service: ContaaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
