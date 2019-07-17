import { TestBed } from '@angular/core/testing';

import { BanOptionalIpService } from './ban-optional-ip.service';

describe('BanOptionalIpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BanOptionalIpService = TestBed.get(BanOptionalIpService);
    expect(service).toBeTruthy();
  });
});
