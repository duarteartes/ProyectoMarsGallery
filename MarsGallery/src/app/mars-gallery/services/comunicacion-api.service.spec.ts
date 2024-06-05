import { TestBed } from '@angular/core/testing';

import { ComunicacionApiService } from './comunicacion-api.service';

describe('ComunicacionApiService', () => {
  let service: ComunicacionApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
