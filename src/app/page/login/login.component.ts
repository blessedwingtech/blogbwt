import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrected to styleUrls
})
export class LoginComponent {
  public logged : any;

  LoginObj: Login;

  constructor(private http: HttpClient, private router: Router){
    this.LoginObj = new Login();
  }

  // On submit form for login
  onLogin(){ 
    localStorage.setItem("accessToken", "12344555")
    console.log('Login data:', this.LoginObj); // Log the data being sent
    this.http.post('http://localhost:5001/api/users/login', this.LoginObj, {
      headers: { 'Content-Type': 'application/json' } // Ensure Content-Type header is set
    }).pipe(
      tap((res: any) => {
        if (res.accessToken) { 
          this.router.navigateByUrl('/home');
          console.log("should navigate to home")
          console.log("Connection réussie ! ", res.accessToken)
          localStorage.setItem('accessToken', res.accessToken)
          alert("Login success!"); 
        } else {
          alert('Login failed. Please check your credentials and try again.');
          console.log("Connection rejetée");
          this.router.navigateByUrl('/login')
        }
      }),
      catchError(error => {
        console.error('Login failed', error);
        console.log("connection rejetée !");
        alert('Login failed. Please check your credentials and try again.');
        return of(null); // Return an observable with a null value
      })
    ).subscribe();
  }
}

export class Login {
  email: string;
  password: string; 
  constructor() {
    this.email = '';
    this.password = ''; 
  }
}
