import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  private apiUrl = 'http://localhost:5001/api/upload';

  constructor(private http: HttpClient) {}

  uploadData(formData: FormData): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }
}
