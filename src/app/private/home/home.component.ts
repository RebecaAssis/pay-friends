import { Component, OnInit } from '@angular/core';
import { PaymentsService } from '../services/payments.service';
import { Observable } from 'rxjs';
import { Payment } from '../interfaces/payment';
import { FormBuilder, Validators } from '@angular/forms';
import { DataItem } from '../interfaces/dataItem';

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
  modalOpened = false;
  method = '';
  idEditItem: number;

  form = this.fb.group({
    name: ['', Validators.required],
    date: ['', Validators.required],
    value: ['', Validators.required],
    title: ['']
  })

  constructor(private payments: PaymentsService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getPaymentsList();
  }

  getPageValue (page: number) {
    this.page = page;
    this.getPaymentsList();
  }

  toggleModal () {    
    this.modalOpened = !this.modalOpened;
    !this.modalOpened && this.clearForm();
  }

  clearForm () {
    this.form.reset({name: '', date: '', value: '', title: ''});
  }

  addPayment () {
    this.toggleModal();
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

  getLimitPerPageValue (limitPerPage: number, page = 1) {
    this.limitPerPage = limitPerPage;
    this.page = page;

    this.getPaymentsList();
  }

  addNewPayment () {
    const payload = this.form.getRawValue();

    this.payments.addNewTask(payload);
    this.toggleModal();
    this.getPaymentsList();
  }

  openModalEditItem (dataItem: DataItem) {
    this.method = dataItem.method;
    this.toggleModal();
    this.idEditItem = dataItem.item.id;
    
    this.form.patchValue({
      name: dataItem.item.name,
      date: dataItem.item.date,
      value: dataItem.item.value,
      title: dataItem.item.title
    });
  }

  editPayment () {
    const payload = this.form.getRawValue();
    payload.id = this.idEditItem;

    this.payments.editTask(payload);
    this.toggleModal();
    this.getPaymentsList();
  }

  deletePayment (payment: Payment) {
    const id = payment.id;
    this.payments.deleteTask(id);
    this.getPaymentsList();
    this.getLimitPerPageValue(this.limitPerPage, this.page);
    //corrigir o page usado no delete
  }

}
