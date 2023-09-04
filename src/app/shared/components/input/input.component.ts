import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() label = 'Senha';
  @Input() iconPath = '';
  @Input() inputType = 'text';
  @Input() inputId = '';
  @Output() iconEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  emitIconEvent () {
    this.iconEvent.emit();
  }

}
