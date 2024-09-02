import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadService } from '../../services/add-picture.service';

@Component({
  standalone: true,
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss'],
  imports: [ReactiveFormsModule, HttpClientModule]
})
export class AddPictureComponent {
  uploadForm: FormGroup;

  constructor(private fb: FormBuilder, private uploadService: UploadService) {
    this.uploadForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      image: [null, Validators.required]
    });
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.patchValue({
        image: file
      });
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('title', this.uploadForm.get('title')?.value);
    formData.append('description', this.uploadForm.get('description')?.value);
    formData.append('image', this.uploadForm.get('image')?.value);
  
    console.log('Form Data:', formData);
  
    this.uploadService.uploadData(formData).subscribe(
      response => {
        console.log('Response:', response);
        alert('Données envoyées avec succès!');
      },
      error => {
        console.error('Error:', error);
        alert('Erreur lors de l\'envoi des données.');
      }
    );
  }
  
}
