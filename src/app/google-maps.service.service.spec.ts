import { TestBed, inject } from '@angular/core/testing';

import { GoogleMaps.ServiceService } from './google-maps.service.service';

describe('GoogleMaps.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoogleMaps.ServiceService]
    });
  });

  it('should be created', inject([GoogleMaps.ServiceService], (service: GoogleMaps.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
