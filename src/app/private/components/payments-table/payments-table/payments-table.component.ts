import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { Payment } from 'src/app/private/interfaces/payment';

@Component({
  selector: 'app-payments-table',
  templateUrl: './payments-table.component.html',
  styleUrls: ['./payments-table.component.scss']
})
export class PaymentsTableComponent implements OnInit {
  @Output() limitPerPageEvent = new EventEmitter();
  @Output() EventActualPage = new EventEmitter();
  @Output() EventEditItem = new EventEmitter();
  @Output() EventRemoveItem = new EventEmitter();
  @Input() payments: Payment[] | null;
  @Input() pagesNumber: number;
  @Input() actualPage: number;

  label = 'Exibir';
  form = this.fb.group({
    limit: 5
  })
  componentDestroyed = new Subject();



  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.onChange();
  }

  onChange () {
    this.form.get('limit')?.valueChanges.subscribe((value) => {
      this.limitPerPageEvent.emit(value);
    });
  }

  emitPage (page: number) {
    this.EventActualPage.emit(page);
  }

  editItem (payment: Payment) {
    const dataItem = {
      item: payment,
      method: 'PATCH'
    }

    this.EventEditItem.emit(dataItem);
  }

  removeItem (payment: Payment) {
    this.EventRemoveItem.emit(payment);
  }
}
