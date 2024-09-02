import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordResetService {
  private apiUrl = 'http://localhost:5001/api'; // Your backend URL

  constructor(private http: HttpClient) {}

  requestPasswordReset(userEmail: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/requestreset`, { email: userEmail });
  }

  resetPassword(token: string, newPassword: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/resetpassword`, { token, newPassword });
  }
}
