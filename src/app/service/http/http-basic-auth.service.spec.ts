import { TestBed } from '@angular/core/testing';

import { HttpBasicAuthService } from './http-basic-auth.service';

describe('HttpBasicAuthService', () => {
  let service: HttpBasicAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBasicAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
