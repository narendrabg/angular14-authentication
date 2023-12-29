import { TestBed } from '@angular/core/testing';

import { HelloDataService } from './hello-data.service';

describe('HelloDataService', () => {
  let service: HelloDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelloDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
