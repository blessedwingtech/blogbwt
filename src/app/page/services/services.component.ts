import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  constructor(private router: Router){}

  services = [
    {
      title: 'Graphic Design',
      description: 'Création de designs graphiques attrayants et professionnels.',
      image: 'https://images.pexels.com/photos/56759/pexels-photo-56759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Création Web',
      description: 'Développement de sites web modernes et réactifs.',
      image: 'https://images.pexels.com/photos/5475763/pexels-photo-5475763.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Développement d\'Applications',
      description: 'Création d\'applications mobiles et web performantes.',
      image: 'https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=1024x1024&w=is&k=20&c=R9Be5UlsTmSki_Bqxqedt-65U_mNMsVQzOpECKvawDs=',
    },
    {
      title: 'Cours en Ligne',
      description: 'Formation en ligne sur divers sujets informatiques.',
      image: 'https://images.pexels.com/photos/6517274/pexels-photo-6517274.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Service Réseau',
      description: 'Installation et gestion de réseaux informatiques.',
      image: 'https://images.pexels.com/photos/18471565/pexels-photo-18471565/free-photo-of-a-machine-with-wires-and-electronics-on-it.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      title: 'Gestion des Réseaux Sociaux',
      description: 'Création et gestion de contenu pour les réseaux sociaux.',
      image: 'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Administration de Système',
      description: 'Gestion et maintenance des systèmes informatiques.',
      image: 'https://images.pexels.com/photos/6981085/pexels-photo-6981085.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Autres Services Informatisés',
      description: 'Divers services informatiques adaptés à vos besoins.',
      image: 'https://images.pexels.com/photos/18471533/pexels-photo-18471533/free-photo-of-a-laboratory-with-computers-and-monitors-on-the-desk.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  onClick() {
    this.router.navigateByUrl('/contact')
    }
}
