import { TestBed } from '@angular/core/testing';

import { ProductServiseService } from './product-servise.service';

describe('ProductServiseService', () => {
  let service: ProductServiseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductServiseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
