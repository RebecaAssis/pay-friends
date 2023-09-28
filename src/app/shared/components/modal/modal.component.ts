import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() title = 'Título';
  @Input() primaryButton = {text: 'SALVAR', color: ''};
  @Input() secondaryButton = {text: 'CANCELAR', color: '__gray'};
  @Input() submitFunction!: Function;
  @Output() declineEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  closeModal () {
    this.declineEvent.emit();
  }

  executeSubmitFunction () {
    this.submitFunction();
  }

}
