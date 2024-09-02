import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignupService {
    private readonly baseUrl = 'http://localhost:5001/api/users/register';

    constructor(private http: HttpClient){}

    SendData(formData: any) {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            // 'Authorization': 'your-auth-token' // if needed
        });

        return this.http.post(this.baseUrl, formData, { headers: headers })
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: any) {
        // Error handling logic
        console.error('An error occurred:', error.error.message);
        return throwError(() => new Error('Something bad happened; please try again later.'));
    }
}
