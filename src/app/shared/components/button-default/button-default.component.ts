import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDefaultComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
