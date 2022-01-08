import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  apiUrl = 'http://localhost:3000/api/v1/';
  constructor(private http: HttpClient) { }

  postFeedback(data: any) {
    return this.http.post(this.apiUrl + 'feedback', data).toPromise();
  }
}
