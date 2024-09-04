import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationService } from '../../services/publication.service';
import { Publication } from '../../models/publication-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-publication',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {
  @Input() publications!: Publication[];

  constructor(private publicationService: PublicationService) {}

  ngOnInit(): void {
    this.onViewPub();
  }

  onViewPub() {
    this.publications = this.publicationService.getAllPublications();
  }

  //to handle text content
  showContent = false;

  toggleContent() {
    this.showContent = !this.showContent;
  }
}
