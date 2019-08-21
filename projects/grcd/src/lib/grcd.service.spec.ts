import { TestBed } from '@angular/core/testing';

import { GRCDService } from './grcd.service';

describe('GRCDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GRCDService = TestBed.get(GRCDService);
    expect(service).toBeTruthy();
  });
});
