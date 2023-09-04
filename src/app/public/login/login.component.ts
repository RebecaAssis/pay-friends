import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  inputType = 'password';
  iconPath = 'assets/icons/eye-closed.png';
  form = this.fb.group({
    email: '',
    password: ''
  });

  constructor(private fb: FormBuilder) { }

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

  onSubmit () {
    const value = this.form.getRawValue();
    window.alert(JSON.stringify(value));
  }

}
