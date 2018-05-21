import { TestBed, inject } from '@angular/core/testing';

import { Fire.ServiceService } from './fire.service.service';

describe('Fire.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Fire.ServiceService]
    });
  });

  it('should be created', inject([Fire.ServiceService], (service: Fire.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
