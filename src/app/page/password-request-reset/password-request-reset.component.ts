import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router'; 
import { PasswordResetService } from '../../services/passwordResetService.service';

@Component({
  selector: 'app-password-request-reset',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './password-request-reset.component.html',
  styleUrls: ['./password-request-reset.component.scss']
})
export class PasswordRequestResetComponent {
  userEmail!: string;

  constructor(private passwordResetService: PasswordResetService) {}

  onSubmit() {
    this.passwordResetService.requestPasswordReset(this.userEmail)
      .subscribe(response => {
        console.log('SUCCESS!', response);
      }, error => {
        console.log('FAILED...', error);
      });
  }
}
