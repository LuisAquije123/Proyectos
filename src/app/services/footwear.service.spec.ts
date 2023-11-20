import { TestBed } from '@angular/core/testing';

import { FootwearService } from './footwear.service';

describe('FootwearService', () => {
  let service: FootwearService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FootwearService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
