import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DonationButtonService } from '../../services/donation-button.service'; 

@Component({
  selector: 'app-donation-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './donation-button.component.html',
  styleUrls: ['./donation-button.component.scss']
})
export class DonationButtonComponent implements OnInit {
  showButton = false;

  constructor(private router: Router, private donationButtonService: DonationButtonService) {}

  ngOnInit() {
    this.donationButtonService.showButton$.subscribe(show => {
      this.showButton = show;
    });
  }

  onGive() {
    this.router.navigateByUrl('/donation');
  }
}
