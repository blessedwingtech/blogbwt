import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DonationButtonService {
  private showButtonSubject = new BehaviorSubject<boolean>(false);
  showButton$ = this.showButtonSubject.asObservable();

  constructor() {
    this.startButtonTimer();
  }

  startButtonTimer() {
    setInterval(() => {
      this.showButtonSubject.next(true);
      setTimeout(() => {
        this.showButtonSubject.next(false);
      }, 30000); // Affiche le bouton pendant 30 secondes
    }, 60000); // Répète toutes les minutes
  }

  alwaysShowButton() {
    this.showButtonSubject.next(true);
  }
}
