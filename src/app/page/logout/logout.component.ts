import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.scss'
})
export class LogoutComponent {
  constructor(private router: Router){}

  onLogout(){
    if(localStorage.getItem('accessToken')){
      localStorage.removeItem('accessToken');
      this.router.navigateByUrl('/login');
      console.log("user logged out successfully");
    }
  }
}
