import { Component, Input, OnInit } from '@angular/core';
import { Payment } from 'src/app/private/interfaces/payment';

@Component({
  selector: 'app-payments-table',
  templateUrl: './payments-table.component.html',
  styleUrls: ['./payments-table.component.scss']
})
export class PaymentsTableComponent implements OnInit {
  @Input() payments: Payment[] | null;

  constructor() { }

  ngOnInit(): void {
  }

}
