import { TestBed } from '@angular/core/testing';

import { favoritosService } from './favoritosService';

describe('Favoritos', () => {
  let service: favoritosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(favoritosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
