// src/app/page/reset-password/reset-password.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './reset-password.component.html',
  styleUrls : ['./reset-password.component.scss']
})
  
export class ResetPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  onSubmit(email: string) {
    this.authService.resetPassword(email).then(() => {
      console.log('Email de réinitialisation envoyé');
    }).catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'email de réinitialisation', error);
    });
  }
}
