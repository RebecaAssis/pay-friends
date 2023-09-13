import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { UserInterface } from '../interfaces/user';
import { Router } from '@angular/router';

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
  dataLogin = {email: '', password: ''};

  constructor(private fb: FormBuilder, private login: LoginService, private router: Router) { }

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
    this.dataLogin = this.form.getRawValue();
    this.login.getUser().subscribe({
      next: (res) => this.validateUser(res),
      error: (error) => console.log(error)
    });
  }

  validateUser (res: UserInterface[]) {
    if (res[0].email === this.dataLogin.email && res[0].password === this.dataLogin.password) {
      return this.router.navigate(['home']);
    }

    return window.alert('senha inválida');
  }

}
