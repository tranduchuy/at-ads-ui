import { TestBed } from '@angular/core/testing';

import { BanAnIpService } from './ban-an-ip.service';

describe('BanAnIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanAnIpService = TestBed.get(BanAnIpService);
    expect(service).toBeTruthy();
  });
});
