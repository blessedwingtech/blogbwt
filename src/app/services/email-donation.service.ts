import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class EmailDonationService {
  private serviceID = 'service_fr896ec';
  private templateID = 'template_m90dpib';
  private userID = 'I_P0-z1XixLDI5ODT';
  //return emailjs.send('service_fr896ec', 'template_grvokoj', templateParams, 'I_P0-z1XixLDI5ODT');
  constructor() {
    emailjs.init(this.userID);
  }

  sendEmail(data: any): Promise<EmailJSResponseStatus> {
    const emailData = {
      to_name: 'Blessed Tech', // or any other recipient name
      from_name: data.name,
      message: data.message,
      name: data.name,
      email: data.email,
      phone: data.phone,
      amount: data.amount,
      transferMethod: data.transferMethod
    };
    return emailjs.send(this.serviceID, this.templateID, emailData);
  }
}
