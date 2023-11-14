import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() label = 'Exibir';
  @Input() inputFormGroup: FormGroup;
  @Input() inputFormControlName: string;
  @Input() options = [5, 10, 15, 20];
  @Output() iconEvent = new EventEmitter();

  componentDestroyed = new Subject();


  constructor() { }

  ngOnInit(): void {
  }

}
