import { TestBed, inject } from '@angular/core/testing';

import { AuthenficationService } from './authenfication.service';

describe('AuthenficationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenficationService]
    });
  });

  it('should be created', inject([AuthenficationService], (service: AuthenficationService) => {
    expect(service).toBeTruthy();
  }));
});
