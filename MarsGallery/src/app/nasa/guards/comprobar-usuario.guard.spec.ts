import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { comprobarUsuarioGuard } from './comprobar-usuario.guard';

describe('comprobarUsuarioGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => comprobarUsuarioGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
