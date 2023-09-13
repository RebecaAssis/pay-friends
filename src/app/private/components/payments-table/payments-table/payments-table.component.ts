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
  @Input() payments: Payment[] | null;
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

}
