import { TestBed } from '@angular/core/testing';

import { CertificationServiceService } from './certification-service.service';

describe('CertificationServiceService', () => {
  let service: CertificationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CertificationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
