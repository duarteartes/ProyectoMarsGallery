import { TestBed } from '@angular/core/testing';

import { ComunicacionNasaService } from './comunicacion-nasa.service';

describe('ComunicacionNasaService', () => {
  let service: ComunicacionNasaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunicacionNasaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
