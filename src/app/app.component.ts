import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pay-friends';
  modalClosed = false;
  inputType = 'password';
  iconPath = 'assets/icons/eye-closed.png';

  closeModal (val: boolean) {
    this.modalClosed = val;
  }

  sentData (val: any) {
    window.alert(val);
    this.modalClosed = false;
  }

  showPassword () {
    if (this.inputType === 'text') {
      this.inputType = 'password';
      this.iconPath = 'assets/icons/eye-closed.png';
    } else {
      this.inputType = 'text';
      this.iconPath = 'assets/icons/eye-opened.png';
    }
  }
}
