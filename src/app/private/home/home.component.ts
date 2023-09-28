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
  paymentsList: Payment[];
  limitPerPage = 5;
  totalTasks: number;
  pagesNumber: number;
  page = 1;

  constructor(private payments: PaymentsService) { }

  ngOnInit(): void {
    this.getPaymentsList();
  }

  getPageValue (page: number) {
    this.page = page;
    this.getPaymentsList();
  }

  getPaymentsList () {
    this.payments.getPaymentsList(this.page, this.limitPerPage).subscribe((res) => {
      this.paymentsList = res.tasksList;
      this.totalTasks = res.totalTasks;
      
      this.definePagesNumber();
    });
  }

  definePagesNumber () {
    this.pagesNumber = this.totalTasks/this.limitPerPage; 
  }

  getLimitPerPageValue (limitPerPage: number) {
    this.limitPerPage = limitPerPage;
    this.getPaymentsList();
  }


  // addNewPayment () {
  //   const payload = {
  //     name: 'teste post',
  //     username: 'testeposst',
  //     title: 'POST',
  //     value: 2,
  //     date: 'TESTE',
  //     image: '',
  //     isPayed: false
  //   };

  //   this.payments.addNewTask(payload);
  // }

  // editPayment () {
  //   const payload = {
  //     name: 'teste PUT',
  //     username: 'testePUT',
  //     title: 'PUT',
  //     value: 2,
  //     date: 'TESTE',
  //     image: '',
  //     isPayed: false
  //   };

  //   this.payments.editTask(payload);
  // }

  // deletePayment () {
  //   const id = 172;
  //   this.payments.deleteTask(id)
  // }

}
