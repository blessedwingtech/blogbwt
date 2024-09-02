import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  sendEmail(formData: any, messageType: 'contact' | 'reset', resetToken?: string): Promise<EmailJSResponseStatus> {
    let messageContent = '';
    if (messageType === 'contact') {
      messageContent = formData.message;
    } else if (messageType === 'reset') {
      messageContent = `Please click the link below to reset your password: http://localhost:4200/reset-password?token=${resetToken}`;
    }

    const templateParams = {
      from_name: formData.from_name,
      country: formData.country,
      email: formData.email,
      message_content: messageContent,
      date_time: formData.date_time
    };

    return emailjs.send('service_fr896ec', 'template_grvokoj', templateParams, 'I_P0-z1XixLDI5ODT');
  }
}
