import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-button-default',
  templateUrl: './button-default.component.html',
  styleUrls: ['./button-default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDefaultComponent implements OnInit {
  @Input() typeButton: string;

  constructor() { }

  ngOnInit(): void {
  }

}
