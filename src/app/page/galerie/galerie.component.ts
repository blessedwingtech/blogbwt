import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-galerie',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './galerie.component.html',
  styleUrl: './galerie.component.scss'
})
export class GalerieComponent {
  image: string = "assets/images/tech.jpeg"
  images = [
    { src: 'assets/images/cover.png', alt: 'Image 1' },
    { src: 'assets/images/kat.png', alt: 'Image 2' },
    { src: 'assets/logo.jpg', alt: 'Image 3' },
    { src: 'https://th.bing.com/th/id/R.9148ec5a761c133fe927466af99caf62?rik=HwV42yps7MsaQw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f05%2fLorikeet-Bird-Full-HD-Image.jpeg&ehk=BdqACRg7qkvuEXAHRJqW2QYyz4cuE75W2RzqZVNLrSQ%3d&risl=&pid=ImgRaw&r=0', alt: 'Image 4' },
  ]

}
