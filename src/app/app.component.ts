import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FooterComponent } from "./page/footer/footer.component";
//import { FirebaseService } from './services/firebase.service';
import { DonationButtonComponent } from "./page/donation-button/donation-button.component";
import { DonationButtonService } from './services/donation-button.service';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, PostComponent, HeaderComponent, SidebarComponent, FooterComponent, DonationButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'stars';

  constructor( private router: Router, 
              private donationButtonService: DonationButtonService,
              private scrollService: ScrollService
  ){}

  ngOnInit(): void {
    //this.firebaseServise.getData()

    //to handle button display
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const alwaysShowRoutes = ['/specific-page1', '/specific-page2']; // Ajoutez ici les routes spécifiques
        if (alwaysShowRoutes.includes(event.urlAfterRedirects)) {
          this.donationButtonService.alwaysShowButton();
        }
      }
    });
  }
}

