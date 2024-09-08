import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DonationService } from '../../services/donation.service';
import { tap } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { EmailDonationService } from '../../services/email-donation.service';

@Component({
  selector: 'app-donation-form',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, FormsModule],
  templateUrl: './donation-form.component.html',
  styleUrls: ['./donation-form.component.scss']
})
export class DonationFormComponent {
  donation = {
    name: '',
    email: '',
    phone: '',
    amount: null,
    transferMethod: '',
    message: ''
  };

  constructor(private router: Router,
              private emailDonationService: EmailDonationService,
              private donationService: DonationService) {}

              

  transferMethods = ['PayPal', 'Carte de débit', 'Virement Bancaire','Moncash', 'Natcash', 'MoneyGram'];

  onSubmit() {
    //start to send email
    console.log('Don soumis avec succès:', this.donation);
    this.emailDonationService.sendEmail(this.donation).then(response => {
      console.log('Email sent successfully to the admin-mail ', response);
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: `Le message de votre Don a été envoyé avec succès!  Nous vous remercions de votre support...  Nous faisons les suivis au plus vite possible grâce à l'Email que vous venez de fournir.`,
        confirmButtonColor: '#3085d6' 
      });
      this.router.navigateByUrl('/services')
    }).catch(error => {
      console.error('Error sending email, le message n\'est pas envoyé', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Une erreur est produite lors de l\'envoi. SVP, laissez nous un message ici !  Cliquez sur OK',
        confirmButtonColor: '#d33' 
    });
    });
    //end of sending email

    console.log('Don soumis :', this.donation);
 /*  this.donationService.sendDonation(this.donation).pipe(
    tap({
      next: (response) => {
        console.log('Donation sent successfully', response);
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: `Le message a été soumis avec succès! <br>Nous vous remercions de votre don... <br> Nous faisons les suivis au plus vite possible.`,
          confirmButtonColor: '#3085d6'
        });
      },
      error: (error) => {
        console.error('Error sending donation', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est produite lors de l\'envoi. SVP, laissez nous un message ici !  Cliquez sur OK',
          confirmButtonColor: '#d33' 
      });
      this.router.navigateByUrl('/contact');
      }
    })
  ).subscribe(); */
  }
}
