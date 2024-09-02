import { TestBed } from '@angular/core/testing';

import { EmailDonationService } from './email-donation.service';

describe('EmailDonationService', () => {
  let service: EmailDonationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmailDonationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
