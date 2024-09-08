import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { NgForm } from '@angular/forms';  // added for form validation
import { CommonModule } from '@angular/common';
import { EmailService } from '../../services/email.service'; 
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
email: any;
country: any;
message: any;
name: any;

  constructor(private emailService: EmailService, 
              private router: Router) {}

  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      const formData = {
        from_name: contactForm.value.name,
        message: contactForm.value.message,
        email: contactForm.value.email, // Ensure this matches the placeholder in your template
        country: contactForm.value.country, // Include the country field
        date_time: new Date().toLocaleString() // Add the current date and time
      };
      this.emailService.sendEmail(formData, 'contact')
        .then(response => {
          console.log('Email sent successfully!', response.status, response.text);
          Swal.fire({
            icon: 'success',
            title: 'Succès',
            text: 'Le message a été soumis avec succès!',
            confirmButtonColor: '#3085d6'
          });
          this.router.navigateByUrl('/home');
        })
        .catch(error => {
          console.error('Failed to send email.', error);
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: 'Échec de l\'envoi du message. Veuillez réessayer !',
            confirmButtonColor: '#d33' 
          });
        });
    }
  }
  /* title = 'contact-form'; 

  constructor(private http: HttpClient) {}

  onSubmit(form: any) {
    /* const recaptchaResponse = (document.getElementById('g-recaptcha-response') as HTMLInputElement).value;
    this.http.post('YOUR_BACKEND_URL', {
      ...form.value,
      recaptcha: recaptchaResponse
    }).subscribe(response => {
      console.log('Form Data: ', response);
    }); 
  } */


    countries: string[] = [
      'Afghanistan', 'Albanie', 'Algérie', 'Andorre', 'Angola', 'Antigua-et-Barbuda', 
      'Argentine', 'Arménie', 'Australie', 'Autriche', 'Azerbaïdjan', 'Bahamas', 
      'Bahreïn', 'Bangladesh', 'Barbade', 'Biélorussie', 'Belgique', 'Belize', 
      'Bénin', 'Bhoutan', 'Bolivie', 'Bosnie-Herzégovine', 'Botswana', 'Brésil', 
      'Brunei', 'Bulgarie', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodge', 
      'Cameroun', 'Canada', 'République centrafricaine', 'Tchad', 'Chili', 'Chine', 
      'Colombie', 'Comores', 'Congo', 'Costa Rica', 'Croatie', 'Cuba', 'Chypre', 
      'République tchèque', 'Danemark', 'Djibouti', 'Dominique', 'République dominicaine', 
      'Équateur', 'Égypte', 'El Salvador', 'Guinée équatoriale', 'Érythrée', 'Estonie', 
      'Eswatini', 'Éthiopie', 'Fidji', 'Finlande', 'France', 'Gabon', 'Gambie', 
      'Géorgie', 'Allemagne', 'Ghana', 'Grèce', 'Grenade', 'Guatemala', 'Guinée', 
      'Guinée-Bissau', 'Guyana', 'Haïti', 'Honduras', 'Hongrie', 'Islande', 'Inde', 
      'Indonésie', 'Iran', 'Irak', 'Irlande', 'Israël', 'Italie', 'Jamaïque', 'Japon', 
      'Jordanie', 'Kazakhstan', 'Kenya', 'Kiribati', 'Corée du Nord', 'Corée du Sud', 
      'Koweït', 'Kirghizistan', 'Laos', 'Lettonie', 'Liban', 'Lesotho', 'Libéria', 
      'Libye', 'Liechtenstein', 'Lituanie', 'Luxembourg', 'Madagascar', 'Malawi', 
      'Malaisie', 'Maldives', 'Mali', 'Malte', 'Îles Marshall', 'Mauritanie', 
      'Maurice', 'Mexique', 'Micronésie', 'Moldavie', 'Monaco', 'Mongolie', 
      'Monténégro', 'Maroc', 'Mozambique', 'Myanmar', 'Namibie', 'Nauru', 'Népal', 
      'Pays-Bas', 'Nouvelle-Zélande', 'Nicaragua', 'Niger', 'Nigeria', 'Macédoine du Nord', 
      'Norvège', 'Oman', 'Pakistan', 'Palaos', 'Panama', 'Papouasie-Nouvelle-Guinée', 
      'Paraguay', 'Pérou', 'Philippines', 'Pologne', 'Portugal', 'Qatar', 'Roumanie', 
      'Russie', 'Rwanda', 'Saint-Kitts-et-Nevis', 'Sainte-Lucie', 'Saint-Vincent-et-les-Grenadines', 
      'Samoa', 'Saint-Marin', 'Sao Tomé-et-Principe', 'Arabie saoudite', 'Sénégal', 
      'Serbie', 'Seychelles', 'Sierra Leone', 'Singapour', 'Slovaquie', 'Slovénie', 
      'Îles Salomon', 'Somalie', 'Afrique du Sud', 'Soudan du Sud', 'Espagne', 
      'Sri Lanka', 'Soudan', 'Suriname', 'Suède', 'Suisse', 'Syrie', 'Taïwan', 
      'Tadjikistan', 'Tanzanie', 'Thaïlande', 'Timor oriental', 'Togo', 'Tonga', 
      'Trinité-et-Tobago', 'Tunisie', 'Turquie', 'Turkménistan', 'Tuvalu', 'Ouganda', 
      'Ukraine', 'Émirats arabes unis', 'Royaume-Uni', 'États-Unis', 'Uruguay', 
      'Ouzbékistan', 'Vanuatu', 'Vatican', 'Venezuela', 'Vietnam', 'Yémen', 
      'Zambie', 'Zimbabwe'
    ];

}
