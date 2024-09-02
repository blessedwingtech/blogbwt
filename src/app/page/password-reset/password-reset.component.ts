import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { PasswordResetService } from '../../services/passwordResetService.service';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent {
  newPassword!: string;
  token!: string;

  constructor(private passwordResetService: PasswordResetService) {}

  onSubmit() {
    this.passwordResetService.resetPassword(this.token, this.newPassword)
      .subscribe(response => {
        console.log('Password reset successful', response);
      }, error => {
        console.error('Password reset failed', error);
      });
  }
}
