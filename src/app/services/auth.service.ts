import { Injectable } from '@angular/core';
import { Auth, sendPasswordResetEmail } from '@angular/fire/auth';
import { inject } from '@angular/core';
import { AuthHelperService } from './auth-helper.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private auth: Auth = inject(Auth);

  constructor(private authHelper: AuthHelperService) {}

  isLoggedIn(): boolean {
    return this.authHelper.isLoggedIn();
  }

  resetPassword(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }
}
