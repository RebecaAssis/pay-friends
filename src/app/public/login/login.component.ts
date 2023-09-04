import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputType = 'password';
  iconPath = 'assets/icons/eye-closed.png';

  constructor() { }

  ngOnInit(): void {
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
