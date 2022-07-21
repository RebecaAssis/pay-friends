import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {
  paymentsTasksUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getPaymentsList() {
    return this.http.get(this.paymentsTasksUrl);
  }
}
