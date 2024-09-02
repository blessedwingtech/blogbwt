import { Component, NgModule, OnInit } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, NgClass],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent implements OnInit {

  // to handle data
  userLocation = {
    country: '',
    region: '',
    datetime: ''
  };

  constructor(private http: HttpClient,
              private signupService: SignupService,
              private router: Router) {}

  ngOnInit() {
    this.getUserLocation();
    this.getUserDateTime(); 
  }

  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        this.http.get(`https://api.ipgeolocation.io/ipgeo?apiKey=a012d969c70d47e78013bdfc35fbe733&lat=${lat}&long=${lon}`)
          .subscribe((data: any) => {
            this.userLocation.country = data.country_name;
            this.userLocation.region = data.state_prov;
          });
      });
    }
  }

  getUserDateTime() {
    const now = new Date();
    this.userLocation.datetime = now.toLocaleString();
  }

  // end to handle data

  // send data to server
  isFocused = false;

  onSubmit(form: any) {
    const formData = { ...form.value, ...this.userLocation };
    console.log(formData);
    this.signupService.SendData(formData).subscribe({
      next: (response) => {
        console.log('Server response:', response);
      },
      error: (error) => {
        console.error('Error while sending data:', error);
      }
    });
    alert('Form submitted!');
    this.router.navigateByUrl("/authentication");

    console.log('Form data:', formData);
  }

  // to handle welcome
  onFocus() {
    this.isFocused = true;
  }

  onBlur() {
    this.isFocused = false;
  }
}
