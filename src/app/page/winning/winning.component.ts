import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-winning',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './winning.component.html',
  styleUrl: './winning.component.scss'
})
export class WinningComponent {
  constructor(private meta: Meta) {
    this.meta.addTags([
      { name: 'description', content: 'Découvrez les meilleures stratégies pour monétiser votre site web et gagner de l\'argent en ligne.' },
      { name: 'keywords', content: 'monétisation, gagner de l\'argent, site web, publicité en ligne, marketing d\'affiliation, contenu sponsorisé, vente de produits' },
      { name: 'author', content: 'Votre Nom' }
    ]);
  }

}
