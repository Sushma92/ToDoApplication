import { TestBed } from '@angular/core/testing';

import { TokenService } from './tokenservice.service';

describe('TokenserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenService = TestBed.get(TokenService);
    expect(service).toBeTruthy();
  });
});
