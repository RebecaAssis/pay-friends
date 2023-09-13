import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../services/payments.service';
import { Observable } from 'rxjs';
import { Payment } from '../interfaces/payment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  payments$: Observable<Payment[]>;
  limitPerPage = 5;

  constructor(private payments: PaymentsService) { }

  ngOnInit(): void {
    this.getPaymentsList();
  }

  getLimitPerPageValue (limitPerPage: number) {
    this.limitPerPage = limitPerPage;
    this.getPaymentsList();
  }

  getPaymentsList () {
    this.payments$ = this.payments.getPaymentsList(2, this.limitPerPage);
  }

}
