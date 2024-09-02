import { TestBed } from '@angular/core/testing';

import { DonationButtonService } from './donation-button.service';

describe('DonationButtonService', () => {
  let service: DonationButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
