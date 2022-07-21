import { PaymentsService } from './../../../services/payments.service';
import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {
  @Input() tableHeadList = ['Usuário', 'Título', 'Data', 'Valor', 'Pago']
  dataList;

  constructor(private paymentsService: PaymentsService) { }

  ngOnInit(): void {

  }

  getDataList() {
    this.paymentsService.getPaymentsList().subscribe((paymentsList) => {
      this.dataList = paymentsList;
      console.log(this.dataList)
    })
  }
}
