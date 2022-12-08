import { TestBed } from '@angular/core/testing';

import { IniciarSesionGuard } from './iniciar-sesion.guard';

describe('IniciarSesionGuard', () => {
  let guard: IniciarSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IniciarSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
