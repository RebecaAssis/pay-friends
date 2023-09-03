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
  @Output() sentDataEvent = new EventEmitter();

  closedModal = false;
  testeSentValue = 'Testando botão continuar';

  constructor() { }

  ngOnInit(): void {
  }

  closeModal () {
    this.closedModal = true;
    this.declineEvent.emit(this.closeModal);
  }

  executeSubmitFunction () {
    this.submitFunction();
  }

}
