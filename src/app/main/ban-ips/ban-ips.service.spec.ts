import { TestBed } from '@angular/core/testing';

import { BanIpsService } from './ban-ips.service';

describe('BanIpsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanIpsService = TestBed.get(BanIpsService);
    expect(service).toBeTruthy();
  });
});
