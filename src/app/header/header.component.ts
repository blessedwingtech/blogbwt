import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, NgbCollapseModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {  

  isNavbarCollapsed = true;
  isNavbarReduced =  false;

  toggleNavbar(){
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
    this.isNavbarReduced = !this.isNavbarReduced;
  }

  //======================== 

  secret(){
    return true;
  }
  

  toggleNavbarOnSmallScreens() {
    if (window.innerWidth < 992) { // 992px corresponds to the 'lg' breakpoint in Bootstrap
      this.isNavbarCollapsed = true;
      this.isNavbarReduced = !this.isNavbarReduced;
    }
  }
}
