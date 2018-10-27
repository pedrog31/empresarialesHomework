import { TestBed, inject } from '@angular/core/testing';

import { ApiMercadolibreService } from './api-mercadolibre.service';

describe('ApiMercadolibreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiMercadolibreService]
    });
  });

  it('should be created', inject([ApiMercadolibreService], (service: ApiMercadolibreService) => {
    expect(service).toBeTruthy();
  }));
});
