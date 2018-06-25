import { TestBed, inject } from '@angular/core/testing';

import { HostServicesService } from './host-services.service';

describe('HostServicesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HostServicesService]
    });
  });

  it('should be created', inject([HostServicesService], (service: HostServicesService) => {
    expect(service).toBeTruthy();
  }));
});
