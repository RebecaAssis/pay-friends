import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  srcPaths: string[] = ['../../../../assets/icons/visibility-off.svg', '../../../../assets/icons/visibility.svg'];
  user = [];

  loginForm = new FormGroup ({
    email: new FormControl(''),
    password: new FormControl('')
  });
  

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.user.push(this.loginForm.value);
    console.log(this.user)
  }

}
