import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, SocialUser, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

declare var google: any;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider('643024567743-65r59vq0d1tpletobtqn9bc3m5ngjv37.apps.googleusercontent.com')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ]
})
export class LoginComponent implements AfterViewInit {
  public logged: any;
  LoginObj: Login;
  user: SocialUser | null = null;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: SocialAuthService
  ) {
    this.LoginObj = new Login();
    this.authService.authState.subscribe((user) => {
      this.user = user;
      if (user) {
        this.router.navigateByUrl('/home');
        localStorage.setItem('accessToken', user.authToken);
        alert('Google login success!');
      }
    });
  }

  ngAfterViewInit(): void {
    const googleSignInButton = document.getElementById('google-signin-button');
    if (googleSignInButton) {
      google.accounts.id.initialize({
        client_id: '643024567743-65r59vq0d1tpletobtqn9bc3m5ngjv37.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this)
      });
      google.accounts.id.renderButton(googleSignInButton, {
        type: 'standard',
        theme: 'outline',
        size: 'large'
      });
    } else {
      console.error('Google Sign-In button element not found');
    }
  }

  handleCredentialResponse(response: any) {
    console.log('Encoded JWT ID token: ' + response.credential);
    this.http.post('http://localhost:5001/api/auth/google', { token: response.credential })
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('accessToken', res.accessToken);
          this.router.navigateByUrl('/home');
          alert('Google login success!');
        },
        error: (err) => {
          console.error('Google login failed', err);
          alert('Google login failed. Please try again.');
        }
      });
  }

  onLogin() {
    localStorage.setItem('accessToken', '12344555');
    console.log('Login data:', this.LoginObj);
    this.http.post('http://localhost:5001/api/users/login', this.LoginObj, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      tap((res: any) => {
        if (res.accessToken) {
          this.router.navigateByUrl('/home');
          console.log('should navigate to home');
          console.log('Connection réussie ! ', res.accessToken);
          localStorage.setItem('accessToken', res.accessToken);
          alert('Login success!');
        } else {
          alert('Login failed. Please check your credentials and try again.');
          console.log('Connection rejetée');
          this.router.navigateByUrl('/login');
        }
      }),
      catchError(error => {
        console.error('Login failed', error);
        console.log('connection rejetée !');
        alert('Login failed. Please check your credentials and try again.');
        return of(null);
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
