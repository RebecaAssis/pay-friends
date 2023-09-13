import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

  constructor(private http: HttpClient) { }

  getPaymentsList (page: number, limit: number): Observable<any> {
    return this.http.get(`http://localhost:3000/tasks?_page=${page}&_limit=${limit}`);
  }
}